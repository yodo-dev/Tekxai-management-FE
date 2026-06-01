import React from 'react';
import Modal from '@/components/ui/Modal';
import { Button, ButtonVariant } from '@/components/ui/Button';
import { AlertTriangle, LogOut, Trash2, Info } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: ButtonVariant;
  loading?: boolean;
  icon?: 'logout' | 'delete' | 'warning' | 'info';
}

const ActionModal: React.FC<ActionModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant,
  loading = false,
  icon = 'warning'
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'logout':
        return <LogOut className="text-red-500" size={24} />;
      case 'delete':
        return <Trash2 className="text-red-500" size={24} />;
      case 'info':
        return <Info className="text-blue-500" size={24} />;
      default:
        return <AlertTriangle className="text-amber-500" size={24} />;
    }
  };

  const getIconBg = () => {
    switch (icon) {
      case 'logout':
      case 'delete':
        return 'bg-red-50';
      case 'info':
        return 'bg-blue-50';
      default:
        return 'bg-amber-50';
    }
  };


  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      size="sm"
    >
      <div className="flex flex-col items-center text-center p-2">
        <div className={cn("h-16 w-16 rounded-md flex items-center justify-center mb-6", getIconBg())}>
          {getIcon()}
        </div>

        <h3 className="text-xl font-black text-gray-900 tracking-tight mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 px-4">
          {description}
        </p>

        <div className="flex justify-center items-center w-full gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={loading}
            className="h-12 w-full rounded-md font-bold text-gray-500 border-gray-200 hover:bg-gray-50 transition-all"
          >
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            loading={loading}
            variant={variant || (icon === 'delete' || icon === 'logout' ? 'danger' : 'primary')}
            className="h-12 w-full rounded-md font-bold"
          >
            {confirmText}
          </Button>

        </div>
      </div>
    </Modal>
  );
};

export default ActionModal;
