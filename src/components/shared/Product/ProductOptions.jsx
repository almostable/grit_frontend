'use client';

export function ProductOptions({ label, data, stateValue, setStateValue }) {
  return (
    <>
      <p className='text-base font-medium'>{label}</p>
      <div className='flex gap-1.5 flex-wrap'>
        <select
          value={stateValue}
          onChange={(e) => setStateValue(e.target.value)}
          className='w-full px-3 py-2.5 border border-neutral-300 rounded-md appearance-none outline-none'
        >
          <option value='' disabled hidden>
            Выбор
          </option>
          {data?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
