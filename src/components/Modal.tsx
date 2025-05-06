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
		<div
			className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
			aria-hidden='false'
			role='dialog'
			aria-modal='true'
		>
			<div className='bg-white dark:bg-[#f3e8e3] p-6 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl relative overflow-auto'>
				<div className='border-2 border-dashed border-[#cb83a3] rounded-2xl p-4 h-full max-h-[80vh] overflow-auto'>
					<button
						className='absolute top-4 right-4 sm:top-8 sm:right-8 text-[#5a2a2a] text-lg font-bold'
						onClick={onClose}
						aria-label='Close modal'
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
