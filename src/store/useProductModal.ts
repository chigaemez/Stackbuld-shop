import { create } from 'zustand';

type ProductModalState = {
  productId: number | null;
  isOpen: boolean;
  openModal: (id: number) => void;
  closeModal: () => void;
};

export const useProductModal = create<ProductModalState>((set) => ({
  productId: null,
  isOpen: false,
  openModal: (id) => set({ productId: id, isOpen: true }),
  closeModal: () => set({ productId: null, isOpen: false }),
}));
