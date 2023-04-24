import Header from "./components/Header"
import db from "../db.json"
import { Container } from "./components/Container"
import { useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { EmailListItem } from "./components/EmailListItem"
import { EmailContent } from "./components/EmailContent"
import { Bottombar } from "./components/Bottombar"

export type Email = {
  id: number
  from: string
  subject: string
  body: string
  createdAt: string
}

function App() {
  const [openEmail, setOpenEmail] = useState<Email | null>(null)

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <Sidebar />
          <div className="relative overflow-y-scroll grow-[1]">
            {db.map(email => (
              <EmailListItem
                key={email.id}
                email={email}
                onClick={() => setOpenEmail(email)}
              />
            ))}
          </div>
          {openEmail && <EmailContent email={openEmail} onClose={() => setOpenEmail(null)} />}
          <Bottombar />
        </div>
      </Container>
    </>
  )
}

export default App
