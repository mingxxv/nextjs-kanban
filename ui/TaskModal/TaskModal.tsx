'use client'
import { useRouter } from 'next/navigation'
import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/use-disclosure";

export default function TaskModal({ children } : { children: React.ReactNode }) {
  const { isOpen, onClose } = useDisclosure({ defaultOpen: true });
  const router = useRouter();

  const handleClose = () => {
    onClose();
    router.back();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="4xl" scrollBehavior='outside' backdrop='blur'>
      <ModalContent>
        <ModalBody className='p-0 gap-0'>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
