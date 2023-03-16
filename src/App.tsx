import { useState } from 'react';
import JobfactorAppBar from './components/JobfactorAppBar';
import SideNav from './components/SideNav';
import CommonPage from './pages/common/CommonPage';

function App() {
    const [selectedOption, setSelectedOption] = useState('Helo');

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <>
            <JobfactorAppBar />
            <SideNav setSelectedOption={setSelectedOption} />
            <CommonPage selectedOption={selectedOption} />
        </>
    );
}

export default App;
