'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Selected from '@/components/selectedData/Selected';

const SelectedStates = () => {
    const { selectedStates } = useSelector((s: RootState) => s.indiaSlice);
    return (
        <Selected
            data={selectedStates}
            route="/india/visualize"
            type="india"
            noDataMsg="no state selected"
        />
    );
};

export default SelectedStates;
