import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";

interface AddRealtyModalProps {
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddRealtyModal({setAddModal} : AddRealtyModalProps) {
  const [form] = Form.useForm();

  const handleAddRealty = () => {
    form.validateFields();
  }

  const handleError = () => {

  }

  return (
    <Modal title="Adicionar imóvel" visible onCancel={() => setAddModal(false)} onOk={handleAddRealty}>
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
      <Form.Item label="Título" name="title" rules={[{ required: true, message: 'O título é obrigatório' }]}>
        <Input placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Descrição"  name="description"  rules={[{ required: true, message: 'Informe uma descrição' }]}>
        <Input.TextArea  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Preço" name="price" rules={[{ required: true, message: 'Preço inválido' }]}>
        <Input prefix="R$" inputMode="decimal" placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Endereço" name="address" rules={[{ required: true, message: 'Endereço é obrigatório' }]}>
        <Input  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Cidade" name="city" rules={[{ required: true, message: 'Cidade é obrigatória' }]}>
        <Input  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Estado" name="state" rules={[{ required: true, message: 'Estado é obrigatório' }]}>
        <Input  placeholder="Digite aqui..." maxLength={2}/>
      </Form.Item>
      <Form.Item label="CEP" name="cep" rules={[{ required: true, message: 'Por favor... informe o CPF no formato 00000-000' }]}>
        <Input inputMode="numeric" maxLength={9} pattern="XXXXX-XXX" placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Tipo de Contrato" name="contract" rules={[{ required: true, message: 'Selecione o tipo de contrato' }]}>
        <Select placeholder="Selecione aqui...">
          <Select.Option value="Aluguel">Aluguel</Select.Option>
          <Select.Option value="Compra">Compra</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Área" name="area" rules={[{ required: true, message: 'Insira a área do imóvel' }]}>
        <Input suffix="m2" inputMode="decimal" type="number"  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Dormitórios" name="rooms" rules={[{ required: true, message: 'Informe quantos dormitórios o imóvel possui' }]}>
        <Input inputMode="numeric" type="number"  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Banheiros" name="bathroom" rules={[{ required: true, message: 'Informe quantos banheiros o imóvel possui' }]}>
        <Input inputMode="numeric" type="number"  placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item label="Vagas" name="garage" rules={[{ required: true, message: 'Informe quantas vagas de garagem o imóvel possui' }]}>
        <Input inputMode="numeric" type="number"   placeholder="Digite aqui..."/>
      </Form.Item>
      <Form.Item name="img_urls" label="URLs das Imagens">
        <Input multiple  type="url" placeholder="https://image.jpg" style={{marginBottom: 8}}/>
        <Input  placeholder="https://image.jpg" style={{marginBottom: 8}}/>
        <Input  placeholder="https://image.jpg" style={{marginBottom: 8}}/>
        <Input  placeholder="https://image.jpg" style={{marginBottom: 8}}/>
        <Input  placeholder="https://image.jpg"/>
      </Form.Item>
    </Form>
  </Modal>
  )
}