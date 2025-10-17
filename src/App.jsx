import React, {useState} from 'react';

// Replace FORM_ENDPOINT with your Formspree form URL like: https://formspree.io/f/{your-id}
// To create the form endpoint, sign up at Formspree.io and create a form that forwards submissions to ketorah.digital@gmail.com
const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'; // <-- replace this
const GUMROAD_SHOP_URL = 'https://ketorahdigital.gumroad.com';
const CONTACT_EMAIL = 'ketorah.digital@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/yvetteingram';
const CANVA_TEMPLATE_LINKS = {
  templates: [
    'https://www.canva.com/link1',
    'https://www.canva.com/link2',
    'https://www.canva.com/link3'
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2E2E2E]">
      <style>{`
        :root {
          --tech-blue: #0077B6;
          --pastel-aqua: #90E0EF;
          --warm-white: #F8F9FA;
          --charcoal: #2E2E2E;
        }
        .brand-accent { background: linear-gradient(90deg, var(--tech-blue), var(--pastel-aqua)); }
      `}</style>

      <Header />

      <main className="max-w-5xl mx-auto p-6 md:p-10 space-y-12">
        <Home />
        <Portfolio />
        <Shop />
        <About />
        <Contact />
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="max-w-5xl mx-auto text-center text-sm text-slate-600">© 2025 Ketorah Digital — Where Clarity Meets Code. Crafted with care by Yvette Ingram.</div>
      </footer>
    </div>
  );
}

function Header(){
  return (
    <header className="shadow-sm bg-white/60 backdrop-blur sticky top-0 z-40">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-sm brand-accent flex items-center justify-center text-white font-semibold">KD</div>
          <div>
            <div className="font-poppins text-lg font-semibold">Ketorah Digital</div>
            <div className="text-xs text-slate-500">Where Clarity Meets Code</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href={GUMROAD_SHOP_URL} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-[#0077B6] text-[#0077B6]">Visit Shop</a>
        </nav>
      </div>
    </header>
  );
}

function Home(){
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-poppins font-extrabold leading-tight">Where Clarity Meets Code.</h1>
        <p className="mt-4 text-lg text-slate-600">Creating digital tools and templates that empower technical communicators to write with confidence and clarity.</p>
        <div className="mt-6 flex items-center gap-4">
          <a href={GUMROAD_SHOP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-md shadow-sm bg-[#0077B6] text-white font-medium">Visit the Shop</a>
          <a href="#portfolio" className="text-sm text-slate-700 hover:underline">View portfolio</a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0077B6] to-[#90E0EF] rounded-lg p-6 text-white">
        <div className="flex flex-col gap-4">
          <div className="text-sm opacity-90">Featured Product</div>
          <div className="font-poppins text-2xl font-bold">Tech Writing Template Pack</div>
          <div className="text-sm opacity-90">Five editable templates to speed up your documentation workflow.</div>
          <a href={GUMROAD_SHOP_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block px-4 py-2 rounded bg-white text-[#0077B6] font-semibold">Buy Now — $15</a>
        </div>
      </div>
    </section>
  );
}

function Portfolio(){
  return (
    <section id="portfolio" className="space-y-6">
      <h2 className="text-2xl font-semibold">Featured Writing Samples</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PortfolioCard title="Task Manager API Guide" subtitle="Swagger + Postman examples" />
        <PortfolioCard title="Quick Start Manual" subtitle="SaaS onboarding guide" />
        <PortfolioCard title="Internal Workflow Guide" subtitle="Developer process documentation" />
      </div>
    </section>
  );
}

function Shop(){
  return (
    <section id="shop" className="space-y-6">
      <h2 className="text-2xl font-semibold">Shop Digital Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard title="Tech Writing Template Pack" price="$15" description="5 ready-to-use documentation templates." />
        <ProductCard title="API Documentation Guide" price="$25" description="Practical eBook + editable Word version." />
        <ProductCard title="Notion Tech Writer Portfolio Template" price="$10" description="One-click Notion template to showcase your work." />
      </div>
      <div className="mt-4 text-sm text-slate-700">Want the Canva templates? <a href={CANVA_TEMPLATE_LINKS.templates[0]} target="_blank" rel="noreferrer" className="text-[#0077B6] hover:underline">Open them here</a>.</div>
    </section>
  );
}

function About(){
  return (
    <section id="about" className="space-y-6">
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-1 flex items-center">
          <img src="/assets/YvetteIngram.jpg" alt="Yvette Ingram" className="w-40 h-40 rounded-lg object-cover shadow-md" />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold">Yvette Ingram</h3>
          <p className="text-slate-600 mt-2">I'm Yvette Ingram, founder of Ketorah Digital — a technical communicator and digital creator passionate about making complex ideas clear. I combine writing, design, and technology to create user-focused documentation, templates, and tools that empower others to communicate with confidence.</p>
          <div className="mt-4">
            <a href="#contact" className="text-[#0077B6] hover:underline">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact(){
  // simple client-side form submission handler for UX; form posts to Formspree when FORM_ENDPOINT is set
  const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // If FORM_ENDPOINT is not replaced, open mailto fallback
    if(FORM_ENDPOINT.includes('your-form-id')){
      // fallback - open mail client
      const subject = encodeURIComponent(payload.subject || 'Website message');
      const body = encodeURIComponent(`Name: ${payload.name}%0AEmail: ${payload.email}%0A%0A${payload.message}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    try{
      setStatus('sending');
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if(res.ok){
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    }catch(err){
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-2xl font-semibold">Let’s Collaborate</h2>
      <p className="text-slate-600">Have a question or want to work together? Send a message below or email directly at <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0077B6] hover:underline">{CONTACT_EMAIL}</a>.</p>

      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg border bg-white">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" type="email" required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input name="subject" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full border rounded px-3 py-2"></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 bg-[#0077B6] text-white rounded">Send Message</button>
            <div className="text-sm text-slate-600">{status === 'sending' ? 'Sending...' : status === 'success' ? 'Message sent — thank you!' : status === 'error' ? 'Error sending. Try email.' : ''}</div>
          </div>
        </form>
      </div>
    </section>
  );
}

function PortfolioCard({ title, subtitle }) {
  return (
    <div className="p-4 rounded-lg border bg-white">
      <div className="h-36 rounded bg-gradient-to-br from-[#90E0EF] to-[#0077B6] flex items-end p-4 text-white font-semibold">{title}</div>
      <div className="mt-3 text-sm text-slate-700">{subtitle}</div>
    </div>
  );
}

function ProductCard({ title, price, description }) {
  return (
    <div className="p-4 rounded-lg border bg-white flex flex-col justify-between">
      <div>
        <div className="font-semibold">{title}</div>
        <div className="mt-2 text-sm text-slate-600">{description}</div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-lg font-bold">{price}</div>
        <a href={GUMROAD_SHOP_URL} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-[#0077B6] text-white text-sm">Buy</a>
      </div>
    </div>
  );
}
