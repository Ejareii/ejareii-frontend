export const cities= [
  {
    id: 1,
    name: 'آذربایجان شرقی',
    slug: 'آذربایجان-شرقی',
    subsets: [
      { id: 1, name: 'اشرفی' },
      { id: 2, name: 'خمینی' },
    ],
  },
  {
    id: 2,
    name: 'آذربایجان غربی',
    slug: 'آذربایجان-غربی',
    subsets: [
      { id: 3, name: 'شهرک زرآباد' },
      { id: 4, name: 'نقده' },
    ],
  },
  {
    id: 3,
    name: 'اردبیل',
    slug: 'اردبیل',
    subsets: [
      { id: 5, name: 'شبستر' },
      { id: 6, name: 'مشکین‌شهر' },
    ],
  },
  {
    id: 4,
    name: 'اصفهان',
    slug: 'اصفهان',
    subsets: [
      { id: 7, name: 'اصفهان شهر' },
      { id: 8, name: 'کاشان' },
    ],
  },
  ]

const formattedcities = cities.map((citie) => ({
  value: citie.id,
  label: citie.name,
 
}));

const useCountries = () => {
  const getAll = () => cities;
  const getAllProvince=()=>formattedcities

  const getByValue = (value: number) => {
    return formattedcities.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue,
    getAllProvince
  }
};

export default useCountries;
