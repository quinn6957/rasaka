export default function VMCRequest() {
  
    // redirect to the VMC request page
    if (typeof window !== 'undefined') {
      window.location.href = 'https://vmc.vaiiya.com/request.html';
    }
  
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">VMC Request Page</h1>
    </div>
  );
}