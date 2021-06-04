function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjustedDescriptor;
}



class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  fisrtElement: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.fisrtElement = importedNode.firstElementChild as HTMLFormElement;
    this.fisrtElement.id = 'user-input';

    this.titleInputElement = this.fisrtElement.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.fisrtElement.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.fisrtElement.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.fisrtElement.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.fisrtElement);
  }
}

const projectInput = new ProjectInput();
