import { useState } from "react";
import { BottombarButton } from "./BottombarButton";
import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiMenu, FiTrash2, FiX } from "react-icons/fi";

const inlineIcon = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden sm:inline"

export const Bottombar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full flex gap-2 md:hidden items-center relative">
      <BottombarButton>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Escrever</span>
      </BottombarButton>
      <BottombarButton active>
        <FiInbox className={inlineIcon} />
        <span className={smOnlyText}>Caixa de Entrada</span>
      </BottombarButton>
      <BottombarButton>
        <FiFileText className={inlineIcon} />
        <span className={smOnlyText}>Rascunhos</span>
      </BottombarButton>
      <BottombarButton onClick={() => setIsMenuOpen(state => !state)}>
        {isMenuOpen ? (
          <>
            <FiX className={inlineIcon} />
            <span className={smOnlyText}>Fechar</span>
          </>
        ) : (
          <>
            <FiMenu className={inlineIcon} />
            <span className={smOnlyText}>Menu</span>
          </>
        )}
      </BottombarButton>
      <div
        className={
          `${isMenuOpen ? "absolute" : "hidden"}
          right-0 bottom-12 flex flex-col gap-2`
        }
      >
        <BottombarButton>
          <FiArchive className="inline mr-2 mb-1" />
          Arquivados
        </BottombarButton>
        <BottombarButton>
          <FiAlertOctagon className="inline mr-2 mb-1" />
          Spam
        </BottombarButton>
        <BottombarButton>
          <FiTrash2 className="inline mr-2 mb-1" />
          Lixeira
        </BottombarButton>
      </div>
    </div>
  )
}