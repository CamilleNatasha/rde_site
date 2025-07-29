
export default function () {
  return `
    <section class="py-16 px-6 bg-white max-w-4xl mx-auto">
      <h3 class="text-3xl font-semibold text-center mb-6">Contact Us</h3>
      <form class="space-y-4">
        <input type="text" placeholder="Name" class="w-full p-3 border border-gray-300 rounded" required />
        <input type="email" placeholder="Email" class="w-full p-3 border border-gray-300 rounded" required />
        <textarea placeholder="Message" class="w-full p-3 border border-gray-300 rounded" required></textarea>
        <button type="submit" class="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Send Message</button>
      </form>
    </section>
  `;
}
