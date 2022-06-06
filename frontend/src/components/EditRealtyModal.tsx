import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import { loadQuery, QueryRenderer, useMutation, useQueryLoader } from "react-relay";
import { commitMutation, graphql } from "relay-runtime";
import { Realty } from "../models/Realty";
import { HomeRealtyQuery } from "../pages/Home";
import RelayEnvironment from "../RelayEnvironment";
interface EditRealtyModalProps {
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  realty: any;
}

export function EditRealtyModal({setEditModal, realty} : EditRealtyModalProps) {
  const [form] = Form.useForm();

  const handleAddRealty = () => {
    form.validateFields();
    const fieldValues = form.getFieldsValue();
    const { title, description, price, address, city, state, cep, contract, area, rooms, bathroom, garage, img_urls } = fieldValues;
    const newRealty = new Realty({
      title,
      description,
      price: parseFloat(price),
      address,
      city,
      state,
      cep,
      contractType: contract,
      area: parseFloat(area),
      rooms: parseInt(rooms),
      bathroom: parseInt(bathroom),
      garage: parseInt(garage),
      imageUrls: img_urls
    });

    commitMutation(RelayEnvironment, {
      mutation: graphql`
        mutation EditRealtyModalMutation($id: ID!, $title: String!, $description: String!, $price: Float!, $address: String!, $city: String!, $state: String!, $cep: String!, $contractType: String!, $area: Float!, $rooms: Float!, $bathroom: Float!, $garage: Float!, $imageUrls: [String!]!) {
          updateRealty(id: $id, title: $title, description: $description, price: $price, address: $address, city: $city, state: $state, cep: $cep, contractType: $contractType, area: $area, rooms: $rooms, bathroom: $bathroom, garage: $garage, imageUrls: $imageUrls) {
            id
          }
          },
        `,
        variables: {
            id: realty.id, title: newRealty.title, description: newRealty.description, price: newRealty.price, address: newRealty.address, city: newRealty.city, state: newRealty.state, cep: newRealty.cep, contractType: newRealty.contractType, area: newRealty.area, rooms: newRealty.rooms, bathroom: newRealty.bathroom, garage: newRealty.garage, imageUrls: newRealty.imageUrls
        },
        onCompleted(response) {
          console.log(response);
          setEditModal(false);
          form.resetFields();
        },
        cacheConfig: {
          force: true
        },
        updater: (store) => {
          const updatedRealty = store.get(realty.id);
          console.log('updatedRealty', newRealty);
          if (!updatedRealty) {
            return;
          }
          updatedRealty.setValue(newRealty.title, "title");
          updatedRealty.setValue(newRealty.description, "description");
          updatedRealty.setValue(newRealty.price, "price");
          updatedRealty.setValue(newRealty.address, "address");
          updatedRealty.setValue(newRealty.city, "city");
          updatedRealty.setValue(newRealty.state, "state");
          updatedRealty.setValue(newRealty.cep, "cep");
          updatedRealty.setValue(newRealty.contractType, "contractType");
          updatedRealty.setValue(newRealty.area, "area");
          updatedRealty.setValue(newRealty.rooms, "rooms");
          updatedRealty.setValue(newRealty.bathroom, "bathroom");
          updatedRealty.setValue(newRealty.garage, "garage");
          updatedRealty.setValue(newRealty.imageUrls, "imageUrls");
        }
    },
    
    )
  }

  const handleError = () => {

  }

  return (
    <Modal title="Adicionar imóvel" visible onCancel={() => setEditModal(false)} onOk={handleAddRealty}>
        <Form
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={handleAddRealty}
      onFinishFailed={handleError}
      autoComplete="off"
      layout="vertical"
      >
      <Form.Item label="Título" name="title" initialValue={realty.title} rules={[{ required: true, message: 'O título é obrigatório' }]}>
        <Input placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Descrição"  name="description"  initialValue={realty.description} rules={[{ required: true, message: 'Informe uma descrição' }]}>
        <Input.TextArea  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Preço" name="price" initialValue={realty.price} rules={[{ required: true, message: 'Preço inválido' }]}>
        <Input prefix="R$" inputMode="decimal" placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Endereço" name="address" initialValue={realty.address} rules={[{ required: true, message: 'Endereço é obrigatório' }]}>
        <Input  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Cidade" name="city" initialValue={realty.city} rules={[{ required: true, message: 'Cidade é obrigatória' }]}>
        <Input  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Estado" name="state" initialValue={realty.state} rules={[{ required: true, message: 'Estado é obrigatório' }]}>
        <Input  placeholder="Digite aqui..." maxLength={2}/>
      </Form.Item>
      <Form.Item label="CEP" name="cep" initialValue={realty.cep} rules={[{ required: true, message: 'Por favor... informe o CPF no formato 00000-000' }]}>
        <Input inputMode="numeric" maxLength={9} pattern="XXXXX-XXX" placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Tipo de Contrato" name="contract" initialValue={realty.contractType} rules={[{ required: true, message: 'Selecione o tipo de contrato' }]}>
        <Select placeholder="Selecione aqui...">
          <Select.Option value="Aluguel">Aluguel</Select.Option>
          <Select.Option value="Compra">Compra</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Área" name="area" initialValue={realty.area} rules={[{ required: true, message: 'Insira a área do imóvel' }]}>
        <Input suffix="m2" inputMode="decimal" type="number"  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Dormitórios" name="rooms" initialValue={realty.rooms} rules={[{ required: true, message: 'Informe quantos dormitórios o imóvel possui' }]}>
        <Input inputMode="numeric" type="number"  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Banheiros" name="bathroom" initialValue={realty.bathroom} rules={[{ required: true, message: 'Informe quantos banheiros o imóvel possui' }]}>
        <Input inputMode="numeric" type="number"  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Vagas" name="garage" initialValue={realty.garage} rules={[{ required: true, message: 'Informe quantas vagas de garagem o imóvel possui' }]}>
        <Input inputMode="numeric" type="number"   placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item name="img_urls" label="URLs das Imagens"  initialValue={realty.imageUrls} rules={[{ required: true, message: 'Informe a URL para ao menos uma imagem. Você pode compartilhar um álbum do Google Photos, por exemplo.' }]}>
        <Input  type="url" placeholder="https://image.jpg" style={{marginBottom: 8}}/>
      </Form.Item>
    </Form>
  </Modal>
  )
}