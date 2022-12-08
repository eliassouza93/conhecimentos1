
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contato from "./Contato";
import Outros from "./Outros";
import Produtos from "./Produtos";
import Suporte from "./Suporte";




export default function RotasPaginas() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Produtos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="/outros" element={<Outros />} />
            </Routes>
        </Router>
    )
}