'use client';

import useCountries from '@/src/hooks/useCountries';
import { useState } from 'react';
import Select from 'react-select'




export type CountrySelectValue = {
  label: string;
  value: number
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChangeProvince: (value: any) => void;
  onChangesubsetProvince: (value: any) => void;

}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChangeProvince,
  onChangesubsetProvince
}) => {
  const { getAll,getAllProvince } = useCountries();
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedSubset, setSelectedSubset] = useState('');
  
  const provinces = getAll();
  const provinceOptions =getAllProvince();


  const handleProvinceChange = (selectedOption:any) => {
    console.log(selectedOption)
    setSelectedProvince(selectedOption ? selectedOption.value.toString() : '');
    setSelectedSubset('');
    onChangeProvince(selectedOption.label ||'');
  };

  const handleSubsetChange = (selectedOption: any) => {
    setSelectedSubset(selectedOption ? selectedOption.value.toString() : '');
    onChangesubsetProvince(selectedOption.label || '');
  };

  
  

  const subsetOptions = selectedProvince
  ? provinces
      .find((province) => province.id === parseInt(selectedProvince, 10))
      ?.subsets.map((subset) => ({
        label: subset.name,
        value: subset.id,
      }))
  : [];



  return ( 
    <>
    <div>
       <label htmlFor="province">انتخاب شهر :</label>
      <Select
        placeholder="هر جا!"
        isClearable
        options={provinceOptions}
        value={provinceOptions.find((option) => option.value === parseInt(selectedProvince, 10))}
        onChange={handleProvinceChange}
        formatOptionLabel={(option: any) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>
              {option.label}
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />



    </div>
   {selectedProvince && (
     <div>
     <label htmlFor="province">انتخاب محله:</label>
    <Select
      placeholder="هر جا!"
      isClearable
      options={subsetOptions}
      value={subsetOptions?.find((option) => option.value === parseInt(selectedSubset, 10))}
      onChange={handleSubsetChange}
      formatOptionLabel={(option: any) => (
        <div className="
        flex flex-row items-center gap-3">
          <div>
            {option.label}
          </div>
        </div>
      )}
      classNames={{
        control: () => 'p-3 border-2',
        input: () => 'text-lg',
        option: () => 'text-lg'
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: 'black',
          primary25: '#ffe4e6'
        }
      })}
    />



  </div>
   )}
   </>
   );
}
 
export default CountrySelect;