import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ProjectSkill extends React.PureComponent {

  static defaultProps = {
    projectSkillData: [],
  };
  
  constructor(props) {
    super(props);
    this.state = {
      projectSkills: this.props.projectSkillData.map((_, i) => ({ id: i + 1, isActive: false })),
      isAllActive: false,
    };
  }

  handleButtonClick = (id) => {
    this.setState(prevState => ({
      buttons: prevState.buttons.map(button =>
        button.id === id ? { ...button, isActive: !button.isActive } : button
      )
    }), this.handleClick);
  }
  
  handleClick = () => {
    const totalProjectSkills = this.state.projectSkills.length;
    const activeProjectSkills = this.state.projectSkills.filter(projectSkill => projectSkill.isActive).length;
    // console.log(activeProjectSkills)

    if (totalProjectSkills === activeProjectSkills) {
      this.setState(prevState => {
        const isAllActive = !prevState.isAllActive;
        this.props.onAllActiveChange(isAllActive);
        return { isAllActive };
      }, () => {
        // console.log(this.state); // Logs the new state
      });
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



  // render() {
  //   const totalProjectSkills = this.state.projectSkills.length;
  //   const activeProjectSkills = this.state.projectSkills.filter(projectSkill => projectSkill.isActive).length;

  //   return (
  //     <div>
  //       {this.state.projectSkills.map(projectSkill => (
  //         <ProjectSkill 
  //           key={projectSkill.id} 
  //           isActive={projectSkill.isActive} 
  //           onClick={() => this.handleProjectSkillClick(projectSkill.id)}
  //         />
  //       ))}
  //       <p>Total Project Skills: {totalProjectSkills}</p>
  //       <p>Active Project Skills: {activeProjectSkills}</p>
  //     </div>
  //   );
  // }
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
        {/* <button className={`project-skill ${this.props.isActive ? 'active' : ''}`} onClick={this.props.onClick}>
        {this.props.isActive ? 'Active' : 'Inactive'}
      </button> */}
        {this.props.skills.map((skill, index) => {
          return (
            <ProjectSkill
              skill={skill}
              key={index}
              onAllActiveChange={this.props.onAllActiveChange}
            />
          );
        })}
      </div>
      
    );
  }
}

class ProjectCard extends React.PureComponent {
  render() {
    const {
      image,
      title,
      description,
      skills,
      links,
      onAllActiveChange,
    } = this.props;

    return (
      <div className="project-card">
        <img className="project-image" src={image} />
        <div className="project-background" />
        <div className="project-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectSkills
            skills={skills}
            onAllActiveChange={onAllActiveChange}
          />
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

const Button = ({ isActive, onClick }) => (
  <button className={`project-skill ${isActive ? 'active' : ''}`} onClick={onClick}>
    {isActive ? 'Active' : 'Inactive'}
  </button>
);

export default Projects;
