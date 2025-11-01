import { useEffect, useState } from 'react';
import { getOperators } from '../../api/service/operatorApi';
import CardOperator from '../../ui/cards/CardOperator';

export default function OperatorPage() {
  const [operators, setOperators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const res = await getOperators();
        setOperators(Array.isArray(res.data) ? res.data : (res.data?.data ?? []));
        console.log("Fetched operators:", res.data);
      } catch (error) {
        console.error("Failed to fetch operators:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOperators();
  }, []);

  if (loading) {
    return <div className='p-6 text-gray-600'>Loading...</div>
  }

  return (
    <div className='p-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {operators.map((operator, index) => {
        const name = operator?.nama_lengkap || "Tanpa Nama";
        const hasAccount = Boolean(
          operator?.has_account ?? operator?.punyaAkun ?? operator?.hasAkun ?? false
        );

        return (
          <CardOperator
            key={operator.id ?? `${name}-${index}`}
            index={index + 1}
            name={name}
            hasAccount={hasAccount}
          />
        );
      })}
    </div>
  )
}