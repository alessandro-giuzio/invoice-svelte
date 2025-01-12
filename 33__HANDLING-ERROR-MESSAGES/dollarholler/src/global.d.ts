interface Invoice {
  client: Client
  createdAt: string
  dueDate: string
  id: string
  invoiceNumber: string
  invoiceStatus: InvoiceStatus
  issueDate: string
  lineItems?: LineItem[]
  notes?: string
  subject?: string
  terms?: string
}

interface LineItem {
  amount: number
  description: string
  id: string
  quantity: number
}

interface Client {
  clientStatus: ClientStatus
  city: string
  email: string
  id: string
  name: string
  state: string
  street: string
  zip: string
}

type IFormData = FormData

interface IInvoiceForm {
  data: IFormData;
  existingClient?: string;
  newClient?: string;
  newClientEmail?: string;
  missing?: boolean;
  error?: boolean;
  success?: boolean;
}