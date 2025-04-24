import React, { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-white dark:bg-[#f3e8e3] p-6 rounded-2xl shadow-xl w-full max-w-2xl relative'>
				<div className='border-2 border-dashed border-[#cb83a3] rounded-2xl p-4'>
					<button
						className='absolute top-8 right-10 text-[#5a2a2a] text-lg font-bold '
						onClick={onClose}
					>
						<X />
					</button>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
