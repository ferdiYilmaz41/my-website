const Mail = () => {
  return (
    <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Send me an email</h2>
      <a
        href="mailto:yilmaz.ferdiislam@gmail.com"
        className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
      >
        Mail Me
      </a>
    </div>
  );
}

export default Mail;