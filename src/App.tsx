import { useState, type FormEvent, useRef } from 'react';
import { ChevronDown, Menu, X, Landmark, MapPin, User, Plus, Minus, Facebook, Instagram, Youtube, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { schoolLogos, team, testimonials } from './data';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const faqData = [
  {
    question: 'Do you offer online and in-person tutoring options?',
    answer: (
      <>
        No, we only offer <strong>online</strong> support. We ensure high quality learning can
        occur by the use of proven teaching strategies by our exceptional team, personalized
        lessons, and an interactive platform,{' '}
        <a href="https://www.thelessonspace.com/" target="_blank" rel="noreferrer">Lessonspace</a>.
      </>
    ),
  },
  {
    question: 'What is taught in the lessons?',
    answer:
      'Lessons are personalized based on what your child is currently learning at school. Tutors assess prior knowledge, teach through inquiry, and help students strengthen their understanding of MYP Mathematics Criteria for upcoming assessments.',
  },
  {
    question: 'Who are your tutors?',
    answer: (
      <>
        Our tutors are experienced IB educators who teach MYP and DP Mathematics, including
        examiners, department heads, and workshop leaders. Read more about our amazing team{' '}
        <a href="/team">here</a>.
      </>
    ),
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="site-logo" href="#top" aria-label="MYP Math Tutor home">
          <img src={asset('/site-assets/myp_math_tutor_logo-2.webp')} alt="MYP Math Tutor" />
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="/team" onClick={() => setOpen(false)}>Meet Our Team</a>
          <a href="/testimonials" onClick={() => setOpen(false)}>Testimonials</a>
          <div className="nav-dropdown">
            <button type="button">Support <ChevronDown size={16} /></button>
            <div className="nav-dropdown-menu">
              <a href="/#how-we-help-section">MYP Math Tutoring</a>
              <a href="/dp">DP Math Tutoring</a>
              <a href="/faqs">FAQs</a>
            </div>
          </div>
          <div className="nav-dropdown">
            <button type="button">Free Resources <ChevronDown size={16} /></button>
            <div className="nav-dropdown-menu resources">
              <a href="/articles">Articles</a>
              <a href="/articles/what-is-myp-mathematics">What is MYP Mathematics?</a>
              <a href="/articles/how-is-math-assessed-in-the-myp">How is Mathematics assessed in the MYP?</a>
              <a href="/articles/how-is-myp-math-graded">How is MYP Math Graded?</a>
            </div>
          </div>
          <a href="https://mypmathtutor.teachworks.com/accounts/login" onClick={() => setOpen(false)}>Login</a>
          <a className="original-button header-button" href="#get-in-touch-section" onClick={() => setOpen(false)}>Get in Touch</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <img
        className="hero-equal"
        src={asset('/site-assets/equal.png')}
        alt=""
        aria-hidden="true"
      />
      <img
        className="hero-pi"
        src={asset('/site-assets/pi.png')}
        alt=""
        aria-hidden="true"
      />
      <div className="hero-copy">
        <h1>MYP Math Tutor</h1>
        <p>Connecting Your Child with an Experienced IB Educator</p>
        <a className="original-button white-button" href="#get-in-touch-section">Book a Free Chat</a>
      </div>
      <img className="hero-illustration" src={asset('/site-assets/peoples.png')} alt="Illustration of students learning MYP mathematics online" fetchPriority="high" decoding="async" />
    </section>
  );
}

function SupportingSchools() {
  const topRow = schoolLogos.slice(0, 17);
  const bottomRow = schoolLogos.slice(17);

  return (
    <section className="supporting-schools" id="supporting-students-section">
      <h2>Supporting Students from Top<br />International Schools</h2>
      <div className="logo-track-container">
        <div className="logo-carousel" role="region" aria-roledescription="carousel" aria-label="International schools, row one">
          <div className="logo-track logo-track-forward">
            {[...topRow, ...topRow].map((logo, i) => (
              <div className="school-logo" key={`top-${i}`}>
                <img src={asset(`/site-assets/${logo}`)} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
        <div className="logo-carousel" role="region" aria-roledescription="carousel" aria-label="International schools, row two">
          <div className="logo-track logo-track-reverse">
            {[...bottomRow, ...bottomRow].map((logo, i) => (
              <div className="school-logo" key={`bottom-${i}`}>
                <img src={asset(`/site-assets/${logo}`)} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="founder-section" id="introduction-video">
      <div className="founder-video-container">
        <iframe
          title="A message from our founder"
          src="https://player.vimeo.com/video/899300537?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="founder-message">
        <p>
          In 2022, I started MYP Math Tutor with a goal: to <strong>improve student engagement
          and understanding in MYP mathematics</strong>, focusing on criteria B, C, and D tasks.
        </p>
        <p>
          We’re currently working with 50+ students, equipping them with the skills needed to
          excel in MYP mathematics, and also prepare them for the rigours of the IB DP.
        </p>
        <p>
          <strong>What sets us apart?</strong> While many tutoring services are provided by
          college students, our team consists of experienced educators who truly understand the
          MYP.
        </p>
        <p>
          The outcome? Our students are <strong>confident, have a deep understanding of the MYP,
          and are enthusiastic about learning math</strong>. Students aren’t just grasping the
          four criteria, they’re excelling – many of them scoring 7’s or 8’s across the board.
        </p>
        <p>We’re excited to work with your child to help make MYP maths more straightforward and achievable.</p>
        <p>-Rachel Bodily, M.Ed</p>
      </div>
    </section>
  );
}

function HelpCard({ title, description, price, image }: {
  title: string; description: string; price: string; image: string;
}) {
  return (
    <article className="help-card">
      <div className="help-card-image">
        <img src={asset(`/site-assets/${image}`)} alt="" loading="lazy" decoding="async" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
      <a className="original-button pink-button" href="#get-in-touch-section">Enroll Now</a>
    </article>
  );
}

function HowWeHelp() {
  return (
    <section className="how-we-help" id="how-we-help-section">
      <h2>How We Help</h2>
      <div className="help-grid">
        <HelpCard
          title="One-on-One Tutoring"
          description="Connect your child with a seasoned IB mathematics educator for virtual, personalised MYP mathematics lessons, guaranteed to boost confidence and comprehension in all four criteria."
          price="Get weekly support for €80 per hour."
          image="Group-14275.png"
        />
        <HelpCard
          title="DP Math Tutoring"
          description="The Diploma Programme is no easy feat. With one-to-one support, your child will thrive. Our seasoned IB teachers will walk your child through past papers so they’re confident for final exams."
          price="Get weekly support for €92 per hour."
          image="DgsDg.png"
        />
      </div>
    </section>
  );
}

function Team() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="team-section-wrap" id="meet-our-team-section">
      <section className="team-section">
        <h2 id="team">Meet Our Team</h2>
        <div className="team-intro-panel">
          <div className="team-intro-img">
            <img src={asset('/site-assets/img.webp')} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="team-intro-text">
            <ul>
              <li>We're a <strong>small group of international school educators</strong>, committed to bringing the strengths of <strong>IB Maths in the MYP</strong> to students online</li>
              <li>We believe that <strong>building rapport</strong> is the most important part of learning</li>
              <li>Every one of our tutors is a qualified educator, has <strong>several years of experience</strong> teaching MYP mathematics, and has worked abroad at various IB World Schools</li>
            </ul>
          </div>
        </div>
        
        <div className="team-carousel-container" style={{ width: '100%', position: 'relative' }}>
          <Swiper
            modules={[Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            simulateTouch={true}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              430: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 }
            }}
            className="w-full"
          >
            {team.map((member) => (
              <SwiperSlide key={member.name}>
                <div className="team-member-circular">
                  <img className="portrait" src={asset(`/site-assets/${member.image}`)} alt={member.name} loading="lazy" width={160} height={160} />
                  <h3>{member.name}</h3>
                  {member.role && <p className="team-role">{member.role}</p>}
                  <p>{member.school}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
                      <img className="linkedin-icon" src={asset('/site-assets/Linkedin-1.webp')} alt="" width={24} height={24} />
                    </a>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="team-controls" style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' }}>
            <button 
              className="original-button blue-outline-button" 
              style={{ padding: '8px', borderRadius: '50%', background: 'transparent', border: '1px solid #ccc', color: '#555', cursor: 'pointer' }}
              onClick={() => swiperRef.current?.slidePrev(800)}
              aria-label="Previous team member"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="original-button blue-outline-button" 
              style={{ padding: '8px', borderRadius: '50%', background: 'transparent', border: '1px solid #ccc', color: '#555', cursor: 'pointer' }}
              onClick={() => swiperRef.current?.slideNext(800)}
              aria-label="Next team member"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CalloutTop() {
  return (
    <section className="callout-top">
      <div className="callout-content">
        <h2>IB Math Tutor</h2>
        <p>Ready to see your child thrive? Let’s connect and discuss the best ways to empower their learning!</p>
        <div className="callout-actions">
          <a className="original-button pink-button" href="#get-in-touch-section">Get in Touch</a>
          <a className="original-button pink-button" href="#get-in-touch-section">Book a Free Chat</a>
        </div>
      </div>
      <img className="callout-image" src={asset('/site-assets/Group-14716.png')} alt="" loading="lazy" decoding="async" />
    </section>
  );
}

function WorldMap() {
  return (
    <section className="world-map-section">
      <div className="world-stats">
        <div className="stat-item">
          <Landmark size={48} className="stat-icon" />
          <span>75+ IB world schools</span>
        </div>
        <div className="stat-item">
          <MapPin size={48} className="stat-icon" />
          <span>40 countries</span>
        </div>
        <div className="stat-item">
          <User size={48} className="stat-icon" />
          <span>150+ active students</span>
        </div>
      </div>
      <img className="map-image" src={asset('/site-assets/Group-14877.png')} alt="" loading="lazy" decoding="async" />
    </section>
  );
}

function Contact() {
  const submit = (e: FormEvent) => e.preventDefault();
  return (
    <section className="contact-section" id="get-in-touch-section">
      <h2>Get in Touch</h2>
      <p>We look forward to supporting your child!</p>
      <form className="contact-form" onSubmit={submit}>
        <div className="input-group">
          <label htmlFor="name">Full Name*</label>
          <input type="text" id="name" name="name" autoComplete="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="role">Student/Parent*</label>
          <input type="text" id="role" name="role" placeholder="Are you a student or parent?" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" autoComplete="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone*</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" required />
        </div>
        <div className="input-group">
          <label htmlFor="country">Country*</label>
          <input type="text" id="country" name="country" autoComplete="country-name" required />
        </div>
        <div className="input-group">
          <label htmlFor="message">Questions or comments*</label>
          <textarea id="message" name="message" rows={4} placeholder="(Information such as your child's name and the day(s) & time(s) he/she is available for weekly tutoring are very helpful to know.)"></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What Students &amp; Parents Are Saying</h2>
      <div className="testimonials-carousel" style={{ display: 'block', overflow: 'hidden', width: '100%', maxWidth: '1100px', marginBottom: '60px' }}>
        <Swiper
          modules={[Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
          speed={700}
          slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 40 }
          }}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className={`testimonial-card ${i % 2 === 0 ? 'blue-card' : 'grey-card'}`} style={{ height: '100%' }}>
                <div className="quote-icon" aria-hidden="true">“</div>
                <p>{t.quote}</p>
                <div className="author">
                  <img src={asset(`/site-assets/${t.image}`)} alt="" loading="lazy" decoding="async" width={80} height={80} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}<br/>{t.school}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="testimonial-controls" style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '40px' }}>
        <button 
          className="original-button blue-outline-button" 
          style={{ padding: '8px', borderRadius: '50%', background: 'transparent', border: 'none', cursor: 'pointer' }}
          onClick={() => swiperRef.current?.slidePrev(700)}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <div style={{ display: 'flex', gap: '10px' }}>
          {[0, 1].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => {
                const targetIndex = dotIndex === 0 ? 0 : 2;
                swiperRef.current?.slideToLoop(targetIndex, 700);
              }}
              style={{
                width: '10px', height: '10px', borderRadius: '50%', padding: 0, border: 'none',
                background: (activeIndex === 0 && dotIndex === 0) || (activeIndex === 2 && dotIndex === 1) ? 'var(--blue)' : '#ddd',
                cursor: 'pointer'
              }}
              aria-label={`Go to slide group ${dotIndex + 1}`}
            />
          ))}
        </div>
        <button 
          className="original-button blue-outline-button" 
          style={{ padding: '8px', borderRadius: '50%', background: 'transparent', border: 'none', cursor: 'pointer' }}
          onClick={() => swiperRef.current?.slideNext(700)}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <a className="original-button pink-button" href="/testimonials">Read all stories</a>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq-section" id="faqs">
      <div className="faq-wrap">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className="faq-item" key={item.question}>
              <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{open === index ? <Minus size={14} /> : <Plus size={14} />}</span>
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="faq-answer">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <a className="original-button pink-button" href="/faqs">View all questions</a>
      </div>
    </section>
  );
}

function CalloutBottom() {
  return (
    <section className="callout-bottom">
      <div className="callout-content">
        <h2>MYP Maths Tuition</h2>
        <p>Ready to see your child thrive? Let’s connect and discuss the best ways to empower their learning!</p>
        <div className="callout-actions">
          <a className="original-button pink-button" href="#get-in-touch-section">Get in Touch</a>
          <a className="original-button pink-button" href="#get-in-touch-section">Book a Free Chat</a>
        </div>
      </div>
      <img className="callout-image" src={asset('/site-assets/Group-14782.png')} alt="" loading="lazy" decoding="async" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer-split">
      <div className="footer-left">
        <img className="footer-logo" src={asset('/site-assets/myp_math_tutor_logo-2.webp')} alt="MYP Math Tutor" />
        <h3 className="footer-brand">MYP Math Tutor</h3>
        <div className="footer-links">
          <div className="footer-col">
            <a href="/">Home</a>
            <a href="/team">Meet Our Team</a>
            <a href="/#how-we-help-section">MYP Math Tutoring</a>
            <a href="/dp">DP Math Tutoring</a>
            <a href="https://mypmathtutor.teachworks.com/accounts/login">Login</a>
          </div>
          <div className="footer-col">
            <a href="/faqs">FAQs</a>
            <a href="https://docs.google.com/document/d/1TWDfQByXaFuVKJ2IhIXJTU3WJmCCGLM8R9YGyh9UUG8/edit?usp=sharing" target="_blank" rel="noreferrer">Terms &amp; Conditions</a>
            <a href="https://docs.google.com/document/d/1Q-2XBAgDkjAz14FbdxNDhB71wLaujSVCQt9lyH8iP1g/edit?usp=sharing" target="_blank" rel="noreferrer">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom-info">
          <p className="kvk">KvK-nummer: 97673811</p>
          <p className="copyright">Copyright &copy; {new Date().getFullYear()} MYP Math Tutor</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/mypmathtutor" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.instagram.com/mypmathtutor/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.youtube.com/@mypmathtutor" target="_blank" rel="noreferrer" aria-label="Youtube"><Youtube /></a>
            <a href="https://www.linkedin.com/company/myp-math-tutor/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <h3>Looking for an IB DP Math Tutor?</h3>
        <a className="original-button pink-button" href="/dp">Visit IB DP Math Tutor</a>
        <div className="footer-newsletter">
          <h3>Subscribe to our newsletter</h3>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
            <input type="email" id="newsletter-email" name="newsletter-email" placeholder="Email address" autoComplete="email" required />
            <button type="submit" className="original-button pink-button">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="original-site">
      <Header />
      <main>
        <Hero />
        <SupportingSchools />
        <Founder />
        <HowWeHelp />
        <Team />
        <CalloutTop />
        <WorldMap />
        <Contact />
        <Testimonials />
        <FAQs />
        <CalloutBottom />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
