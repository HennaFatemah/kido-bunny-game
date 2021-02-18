import React from 'react';
import './About.scss'

const About = () => {
    return (
        <section className='about'>
            <div className='about__card'>
                <h1 className="about__title">About The Creator</h1>
                <p  className='about__text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <p  className='about__text'>You can find me on</p>
                <a  className='about__text' href="www.linkedin.com/in/hennafatemah">Linkedin</a>
                <a  className='about__text' href="https://github.com/HennaFatemah">GitHub</a>
                <p  className='about__text'>Leave your reviews here please</p>
                <a  className='about__text'>Email</a>
            </div>
        </section>
    );
};

export default About;