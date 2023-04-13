export default function ActionBtn({ children, action }) {
  return (
    <div
      onClick={action}
      className='border-2 border-green-600 rounded-3xl p-5 hover:bg-green-800/30 cursor-pointer'
    >
      {children}
    </div>
  );
}
