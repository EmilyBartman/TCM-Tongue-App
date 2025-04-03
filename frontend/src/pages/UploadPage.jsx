export default function UploadPage() {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch('https://tcm-tongue-app.onrender.com', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Upload Tongue Image</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
    </div>
  );
}
