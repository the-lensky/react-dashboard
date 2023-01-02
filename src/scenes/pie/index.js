import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Index = () => {
    return (
        <Box m="20px">
            <Header title="Index Chart" subtitle="Simple Index Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    );
};

export default Index;