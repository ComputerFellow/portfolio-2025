import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ProjectSkill extends React.PureComponent {
  render() {
    const { isActive, skill, id, onClick } = this.props;
    const buttonClass = isActive ? 'project-skill active' : 'project-skill';

    return (
      <span className={buttonClass} onClick={onClick}>
        {skill}
      </span>
    );
  }
}

class ProjectSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectSkills: this.props.skills.map((skill, i) => ({
        id: i + 1,
        skill: skill,
        isActive: false,
      })),
    };
  }

  handleButtonClick = id => {
    const darkThemeIsActive = document.body.classList.contains('dark-theme');
    if (darkThemeIsActive) {
      this.setState(prevState => {
        const updatedProjectSkills = prevState.projectSkills.map(skill => {
          if (skill.id === id) {
            return { ...skill, isActive: !skill.isActive };
          }
          return skill;
        });

        return { projectSkills: updatedProjectSkills };
      });
    }
  };

  render() {
    const totalButtons = this.state.projectSkills.length;
    const activeButtons = this.state.projectSkills.filter(
      skill => skill.isActive
    ).length;
    // console.log(
    //   `Total buttons: ${totalButtons}, Active buttons: ${activeButtons}`
    // );
    // console.log(this.state + ' is this state');

    if (totalButtons !== activeButtons) {
      return (
        <div className="project-skills">
          {this.state.projectSkills.map(skill => (
            <ProjectSkill
              key={skill.id}
              skill={skill.skill}
              isActive={skill.isActive}
              onClick={() => this.handleButtonClick(skill.id)}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="txt project-skills-all-on">
          {this.state.projectSkills.map(skill => (
            <ProjectSkill
              key={skill.id}
              skill={skill.skill
                .split('')
                .map((char, i) => <span key={i}>{char}</span>)}
              isActive={skill.isActive}
              onClick={() => this.handleButtonClick(skill.id)}
            />
          ))}
        </div>
      );
    }
  }
}

//THIS IS THE ORIGINAL CLASS, THE 1/4 NOT MENTIONED BY COPILOT
class ProjectLinks extends React.PureComponent {
  render() {
    const { github, preview, disabled } = this.props.links;
    return (
      <div className="project-links">
        <a
          href={preview}
          rel="noopener"
          target="_blank"
          className={`project-link ${
            disabled && disabled.preview ? 'disabled' : ''
          }`}
        >
          Live Demo &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="external-link-alt" />
        </a>
        <a
          href={github}
          rel="noopener"
          target="_blank"
          className={`project-link secondary ${
            disabled && disabled.github ? 'disabled' : ''
          }`}
        >
          <FontAwesomeIcon icon={['fab', 'github']} /> View Source
        </a>
      </div>
    );
  }
}

class ProjectCard extends React.PureComponent {
  render() {
    const { image, title, description, skills, links } = this.props;

    return (
      <div className="project-card">
        <img className="project-image" src={image} />
        <div className="project-background" />
        <div className="project-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectSkills skills={skills} />
          <div className="links-and-circles">
            <ProjectLinks links={links} />
            <img className="circles" src={image} />
          </div>
        </div>
      </div>
    );
  }
}

class Projects extends React.PureComponent {
  render() {
    const { projects } = this.props;
    return (
      <div className="projects-container">
        {projects.map(proj => (
          <ProjectCard
            title={proj.title}
            description={proj.description}
            skills={proj.skills}
            links={proj.links}
            image={proj.image}
            key={proj.title}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
