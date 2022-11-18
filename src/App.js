import Skype from "./assets/images/skype-icon.png";
import Icq from "./assets/images/icq-icon.png";
import Email from "./assets/images/email-icon.png";
import Phone from "./assets/images/phone-icon.png";

function App() {
  return (
    <main>
      <section className="stage">
        <div className="container stage__wrapper">
          <div className="stage__text">
            <h1 className="stage__title">Psychology Facts</h1>
            <ul className="stage__list">
              <li className="stage__list-item">
                Greek word ‘psyche’ translating as ‘breath, spirit, soul’ and
                ‘logia’.
              </li>
              <li className="stage__list-item">
                66 days for an individual to make something a daily habit.
              </li>
              <li className="stage__list-item">
                An average individual’s mind wanders 30% of the time.
              </li>
              <li className="stage__list-item">
                Hearing negative things could damage five positive memories.
              </li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1512521743077-a42eeaaa963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            className="stage__image"
            alt="img1"
          />
        </div>
      </section>
      <section className="about">
        <div className="container about__wrapper">
          <img
            src="https://images.unsplash.com/photo-1596477225155-7d6a69493463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            className="about__image"
            alt="img2"
          />
          <div className="about__text">
            <h2 className="about__title">Experimental psychology</h2>
            <p className="about__desc">
              Philosopher John Stuart Mill believed that the human mind was open
              to scientific investigation, even if the science is in some ways
              inexact.
            </p>
            <p className="about__desc">
              The German psychologist Hermann Ebbinghaus, a researcher at the
              University of Berlin, was another 19th-century contributor to the
              field. He pioneered the experimental study of memory and developed
              quantitative models of learning and forgetting.
            </p>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2 className="features__title">Consolidation and funding</h2>
          <div className="features__items">
            <div className="feature">
              <p className="feature__text">
                The first meeting of the International Congress of Psychology
                sponsored by the International Union of Psychological Science
                took place in Paris, in August 1889.
              </p>
            </div>
            <div className="feature">
              <p className="feature__text">
                The American Psychological Association was founded soon after,
                in 1892. The International Congress continued to be held at
                different locations in Europe and with wide international
                participation.
              </p>
            </div>
            <div className="feature">
              <p className="feature__text">
                American psychology gained status upon the U.S.'s entry into
                World War I. A standing committee headed by Robert Yerkes
                administered mental tests to almost 1.8 million soldiers.
              </p>
            </div>
            <div className="feature">
              <p className="feature__text">
                Subsequently, the Rockefeller family, via the Social Science
                Research Council, began to provide funding for behavioral
                research. Rockefeller charities funded the National Committee on
                Mental Hygiene.
              </p>
            </div>
            <div className="feature">
              <p className="feature__text">
                Under the influence of the Carnegie-funded Eugenics Record
                Office, the Draper-funded Pioneer Fund, and other institutions,
                the eugenics movement also influenced American psychology.
              </p>
            </div>
            <div className="feature">
              <p className="feature__text">
                In contrast to the US, in the UK psychology was met with
                antagonism by the scientific and medical establishments, and up
                until 1939, there were only six psychology chairs in
                universities in England.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="screenshots">
        <div className="container">
          <h2 className="screenshots__title">Major schools of thought</h2>
          <div className="screenshots__items">
            <div className="screenshot">
              <img
                src="https://images.unsplash.com/photo-1545055144-9ab226a851c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="screenshot__image"
                alt="img3"
              />
              <div className="screenshot__text">
                <h3 className="screenshot__title">Biological</h3>
                <p className="screenshot__desc">
                  Psychologists generally consider biology the substrate of
                  thought and feeling, and therefore an important area of study.
                  Behaviorial neuroscience, also known as biological psychology.
                </p>
              </div>
            </div>
            <div className="screenshot">
              <img
                src="https://images.unsplash.com/reserve/jmdO6mZaSHujNfrP3HxV_13486382943_71b791144c_o.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                className="screenshot__image"
                alt="img4"
              />
              <div className="screenshot__text">
                <h3 className="screenshot__title">Behaviorist</h3>
                <p className="screenshot__desc">
                  A tenet of behavioral research is that a large part of both
                  human and lower-animal behavior is learned. Behavioral
                  research is the mechanisms involved in learning applied to
                  humans and non-humans.
                </p>
              </div>
            </div>
            <div className="screenshot">
              <img
                src="https://images.unsplash.com/photo-1500069329338-1f270dce111f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="screenshot__image"
                alt="img5"
              />
              <div className="screenshot__text">
                <h3 className="screenshot__title">Cognitive</h3>
                <p className="screenshot__desc">
                  Cognitive psychology involves the study of mental processes,
                  including perception, attention, language comprehension and
                  production, memory, and problem solving.
                </p>
              </div>
            </div>
            <div className="screenshot">
              <img
                src="https://images.unsplash.com/photo-1491684417608-b0a24c853433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                className="screenshot__image"
                alt="img6"
              />
              <div className="screenshot__text">
                <h3 className="screenshot__title">Psychoanalytic</h3>
                <p className="screenshot__desc">
                  Psychoanalysis refers to the theories and therapeutic
                  techniques applied to the unconscious mind and its impact.
                  These theories and techniques inform treatments for mental
                  disorders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <h2 className="reviews__title">Themes</h2>
          <div className="reviews__items">
            <div className="review">
              <img
                src="https://images.unsplash.com/photo-1517909277968-946dd06adf1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="review__image"
                alt="img6"
              />
              <div className="review__text">
                <p className="review__text-item">
                  Personality psychology is concerned with enduring patterns of
                  behavior, thought, and emotion. Theories of personality vary
                  across different psychological schools of thought.
                </p>
                <p className="review__text-author">Personality</p>
              </div>
            </div>
            <div className="review">
              <img
                src="https://images.unsplash.com/photo-1581843499195-96cdd9824706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                className="review__image"
                alt="img7"
              />
              <div className="review__text">
                <p className="review__text-item">
                  Study of the unconscious mind, a part of the psyche outside
                  the individual's awareness but that is believed to influence
                  conscious thought and behavior, was a hallmark of early
                  psychology.
                </p>
                <p className="review__text-author">Unconscious mind</p>
              </div>
            </div>
            <div className="review">
              <img
                src="https://images.unsplash.com/photo-1496672254107-b07a26403885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                className="review__image"
                alt="img8"
              />
              <div className="review__text">
                <p className="review__text-item">
                  Some psychologists study motivation or the subject of why
                  people or lower animals initiate a behavior at a particular
                  time. It also involves the study of why humans and lower
                  animals.
                </p>
                <p className="review__text-author">Motivation</p>
              </div>
            </div>
            <div className="review">
              <img
                src="https://images.unsplash.com/photo-1584939003014-167c7442ca54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="review__image"
                alt="img9"
              />
              <div className="review__text">
                <p className="review__text-item">
                  Developmental psychology refers to the scientific study of how
                  and why the thought processes, emotions, and behaviors of
                  humans change over the course of their lives.
                </p>
                <p className="review__text-author">Development psychology</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="prices">
        <div className="container">
          <h2 className="prices__title">Plans</h2>
          <div className="prices__items">
            <div className="price">
              <h3 className="price__title">Basic</h3>
              <div className="price__sum">100</div>
              <ol className="price__features">
                <li className="price__features-item">Accidents and injuries</li>
                <li className="price__features-item">Cardiovascular disease</li>
                <li className="price__features-item">Mental health</li>
                <li className="price__features-item">
                  Musculoskeletal disorder
                </li>
              </ol>
              <a href="#1" className="price__btn">
                Find More
              </a>
            </div>
            <div className="price">
              <h3 className="price__title">Premium</h3>
              <div className="price__sum">150</div>
              <ol className="price__features">
                <li className="price__features-item">Accidents and injuries</li>
                <li className="price__features-item">Cardiovascular disease</li>
                <li className="price__features-item">Mental health</li>
                <li className="price__features-item">
                  Musculoskeletal disorder
                </li>
                <li className="price__features-item">Physical health</li>
                <li className="price__features-item">Workplace violence</li>
                <li className="price__features-item">Industrial psychology</li>
                <li className="price__features-item">Observational studies</li>
              </ol>
              <a href="#1" className="price__btn">
                Find More
              </a>
            </div>
            <div className="price">
              <h3 className="price__title">Lux</h3>
              <div className="price__sum">200</div>
              <ol className="price__features">
                <li className="price__features-item">Accidents and injuries</li>
                <li className="price__features-item">Cardiovascular disease</li>
                <li className="price__features-item">Mental health</li>
                <li className="price__features-item">
                  Musculoskeletal disorder
                </li>
                <li className="price__features-item">Physical health</li>
                <li className="price__features-item">Workplace violence</li>
                <li className="price__features-item">Industrial psychology</li>
                <li className="price__features-item">Observational studies</li>
                <li className="price__features-item">Meta analysis</li>
                <li className="price__features-item">Research study</li>
                <li className="price__features-item">statistical hypothesis</li>
                <li className="price__features-item">Surveys studies</li>
              </ol>
              <a href="#1" className="price__btn">
                Find More
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__main">
          <h2 className="footer__title">Contacts</h2>
          <div className="footer__contacts">
            <form className="footer__contact-form" action="#11">
              <input
                type="text"
                className="footer__input"
                placeholder="Your name:"
              ></input>
              <input
                type="email"
                className="footer__input"
                placeholder="Your email:"
              ></input>
              <textarea
                className="footer__textarea"
                placeholder="Enter your message:"
              ></textarea>
              <input type="submit" className="footer__submit" value="Send" />
            </form>
            <div className="footer__contacts-items">
              <div className="footer__links">
                <a href="#2" className="footer__link-item">
                  <img src={Skype} alt="Skype" />
                  <span>Login to Skype</span>
                </a>
                <a href="#3" className="footer__link-item">
                  <img src={Icq} alt="Icq" />
                  <span>279679659</span>
                </a>
                <a href="#4" className="footer__link-item">
                  <img src={Email} alt="Email" />
                  <span>styles@gmail.com</span>
                </a>
                <a href="#5" className="footer__link-item">
                  <img src={Phone} alt="Phone" />
                  <span>80 00 4568 55 55</span>
                </a>
              </div>
              <div className="social">
                <a href="#6" className="social__icon">
                  l
                </a>
                <a href="#7" className="social__icon">
                  f
                </a>
                <a href="#8" className="social__icon">
                  i
                </a>
                <a href="#9" className="social__icon">
                  g
                </a>
                <a href="#10" className="social__icon">
                  x
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            Copyright &copy; 2022 Products Inc.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
