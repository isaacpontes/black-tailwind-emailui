import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiSend, FiTrash2 } from "react-icons/fi"
import { Button } from "./Button"
import { SidebarButton } from "./SidebarButton"

const inlineIcon = "inline mr-2 mb-1"

export const Sidebar = () => (
  <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
    <Button>
      <FiEdit3 className={inlineIcon} />
      Escrever
    </Button>
    <SidebarButton active>
      <FiInbox className={inlineIcon} />
      Caixa de Entrada
    </SidebarButton>
    <SidebarButton>
      <FiSend className={inlineIcon} />
      Enviados
    </SidebarButton>
    <SidebarButton>
      <FiFileText className={inlineIcon} />
      Rascunhos
    </SidebarButton>
    <SidebarButton>
      <FiArchive className={inlineIcon} />
      Arquivados
    </SidebarButton>
    <SidebarButton>
      <FiAlertOctagon className={inlineIcon} />
      Spam
    </SidebarButton>
    <SidebarButton>
      <FiTrash2 className={inlineIcon} />
      Lixeira
    </SidebarButton>
  </aside>
)