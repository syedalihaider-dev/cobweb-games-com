'use client';

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  title: string;
  number: string;
  description: string;
}

interface TwoDArtTeamProps {
  sectionClass?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  badgeText?: string;
  mainHeading?: string;
  imageSrc?: string;
  imageAlt?: string;
  teamMembers?: TeamMember[];
}

const defaultTeamMembers: TeamMember[] = [
  {
    id: 'team-1',
    title: 'Art Director',
    number: '01',
    description:
      'The art director leads creative direction across all Cobweb Games art projects. Style guides, visual consistency, and the final call on whether an asset meets the brief. If the art is going out with Cobweb\'s name on it, Ali has seen it.'
  },
  {
    id: 'team-2',
    title: 'Concept Artists',
    number: '02',
    description:
      'Visual development from brief to approved style frame. Character exploration, environment boards, and prop references that the production team can build from directly.'
  },
  {
    id: 'team-3',
    title: 'Character Designers',
    number: '03',
    description:
      '2D character design and character art. Joint-aware design, expression sheets, and animation-ready deliverables.'
  },
  {
    id: 'team-4',
    title: 'Environment Artists',
    number: '04',
    description:
      'Background art, tilesets, and level art. Gameplay-aware visual design that serves the player experience as well as the art direction.'
  },
  {
    id: 'team-5',
    title: 'Technical Artists',
    number: '05',
    description:
      'Pipeline integration, atlas packing, engine import testing, and the layer that makes the artwork in the build.'
  }
];

const TwoDArtTeam: React.FC<TwoDArtTeamProps> = ({
  sectionClass = 'team-sec4',
  backgroundImage = '/assets/images/game-art/team-bg.webp',
  badgeText = 'Our Team',
  mainHeading = 'Meet Our <b class="c-green">2D Game Art</b> Team',
  imageSrc = '/assets/images/mens-charc.gif',
  imageAlt = 'Character animation',
  teamMembers = defaultTeamMembers
}) => {
  return (
    <section 
      className={`${sectionClass} next-image-background-host`} 
      
    >
        <Image className="next-image-background" src={backgroundImage} alt="" fill sizes="100vw" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4>{badgeText}</h4>
            <h2 
              className="main-heading"
              dangerouslySetInnerHTML={{ __html: mainHeading }}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="img-wrap">
              <Image 
                className="lazy loaded" 
                src={imageSrc} 
                data-src={imageSrc} 
                alt={imageAlt} 
                data-was-processed="true" 
                width={315}
                height={612}
                unoptimized
              />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {teamMembers.map((member) => (
                <div 
                  className="col-lg-4 col-md-6" 
                  key={member.id}
                >
                  <div className="box-wrap">
                    <div className="head">
                      <h3>{member.title}</h3>
                      <span>{member.number}</span>
                    </div>
                    <p>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoDArtTeam;
