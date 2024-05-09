import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ProjectSkill extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isActive: false, isAllActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const projectSkillCount = document.getElementsByClassName('project-skill').length;
    const activeProjectSkillCount = document.getElementsByClassName('project-skill active').length;
    const darkThemeIsActive = document.body.classList.contains('dark-theme');
    console.log(this.state); // Logs the new state

  
    if (darkThemeIsActive) {
      this.setState(prevState => ({ isActive: !prevState.isActive }));
    }
    if (projectSkillCount === activeProjectSkillCount){
      this.setState(prevState => {
        const isAllActive = prevState.isAllActive ? false : true;
        this.props.onAllActiveChange(isAllActive); 
        return { isAllActive: !prevState.isAllActive};
      }, () => {
      })
    }
  }
  

  render() {
    const { isActive } = this.state;
    const { skill } = this.props;
    const buttonClass = isActive ? 'project-skill active' : 'project-skill';

    return (
      <div>
        <span className={buttonClass} onClick={this.handleClick}>
          {skill}
        </span>
      </div>
    );
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
          Live Demo <FontAwesomeIcon icon="external-link-alt" />
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

class ProjectSkills extends React.PureComponent {
  render() {
    return (
      <div className="project-skills">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} onAllActiveChange={this.props.onAllActiveChange} />;
        })}
      </div>
    );
  }
}

class ProjectCard extends React.PureComponent {
  render() {
    const { image, title, description, skills, links, onAllActiveChange } = this.props;

    return (
      <div className="project-card">
        <img className="project-image" src={image} />
        <div className="project-background" />
        <div className="project-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectSkills skills={skills} onAllActiveChange={onAllActiveChange} />
          <ProjectLinks links={links} />
        </div>
      </div>
    );
  }
}


class Projects extends React.PureComponent {
  render() {
    const { projects, onAllActiveChange } = this.props;
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
            onAllActiveChange={onAllActiveChange}
          />
        ))}
      </div>
    );
  }
}


export default Projects;
