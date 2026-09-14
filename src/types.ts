type Product = {
  id: number;
  thumbnail: string;
  title: string;
  category: string;
  price: number;
};

interface CartItem extends Product {
  quantity: number;
}

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (product: CartItem) => void;
  decreaseQuantity: (product: CartItem) => void;
  getCartTotal: () => number;
  cartCount: number;
};

type ProductCardProps = {
  product: Product | CartItem;
  onAction: (product: Product) => void;
  actionLabel: string;
  showEditButton?: boolean;
  onProductUpdated?: (updatedProduct: Product) => void;
  showQuantity?: boolean;
  incQuantity?: (product: CartItem) => void;
  decQuantity?: (product: CartItem) => void;
};

type UpdateFormProps = {
  productId: number;
  product: Product;
  onProductUpdated?: (updatedProduct: Product) => void;
  open: boolean;
  onClose: () => void;
};

type ProductFormProps = {
  isModal?: boolean;
  formData: FormDataProps;
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type ProductListProps = {
  products: Product[];
  loading: boolean;
  error: string | null;
  onProductUpdated: (updatedProduct: Product) => void;
};

type AddProductProps = {
  onProductAdded: (newProduct: Product) => void;
};

type  FormDataProps = {
  title: string;
  category: string;
  price: string;
};

type ApiResponse<T> = {
  products: T[];
  total: number;
  skip: number;
  limit: number;
};

type registrationFormData = {
  name: string;
  companyName: string;
  email: string;
};

type providerProps = {
  children: React.ReactNode;
};
