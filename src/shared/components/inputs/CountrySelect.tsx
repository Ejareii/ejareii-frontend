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
  valueProvince?:string
  valueSubProvince?:string
  onChangeProvince: (value: any) => void;
  onChangesubsetProvince: (value: any) => void;

}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  valueSubProvince,
  valueProvince,
  onChangeProvince,
  onChangesubsetProvince
}) => {
  const { getAll,getAllProvince } = useCountries();
  const [selectedProvince, setSelectedProvince] = useState(valueProvince);
  const [selectedSubset, setSelectedSubset] = useState(valueSubProvince);
  
  const provinces = getAll();
  const provinceOptions =getAllProvince();


  const handleProvinceChange = (selectedOption:any) => {
    console.log(selectedOption)
    setSelectedProvince(selectedOption ? selectedOption.label.toString() : '');
    setSelectedSubset('');
    onChangeProvince(selectedOption.label ||'');
  };

  const handleSubsetChange = (selectedOption: any) => {
    setSelectedSubset(selectedOption ? selectedOption.label.toString() : '');
    onChangesubsetProvince(selectedOption.label || '');
  };

  
  

  const subsetOptions = selectedProvince
  ? provinces
      .find((province) => province.name === selectedProvince)
      ?.subsets.map((subset) => ({
        label: subset.name,
        value: subset.id,
      }))
  : [];


console.log(provinceOptions,"selectedProvince")
  return ( 
    <>
    <div>
       <label htmlFor="province">انتخاب شهر :</label>
      <Select
        placeholder="هر جا!"
        isClearable
        options={provinceOptions}
        value={provinceOptions.find((option) => option.label === selectedProvince)}
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
      value={subsetOptions?.find((option) => option.label === selectedSubset)}
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