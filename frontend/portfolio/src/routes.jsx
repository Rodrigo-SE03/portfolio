import { BrowserRouter, Routes, Route } from "react-router";
import PageContainer from "./components/PageContainer/PageContainer";
import Home from "./pages/Home/Home";

function AppRoutes(){
    return (
        <BrowserRouter>
            <PageContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </PageContainer>
        </BrowserRouter>
    )
}

export default AppRoutes;