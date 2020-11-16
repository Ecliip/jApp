import {Injectable} from '@angular/core';
import {Employer} from './Employer.interface';

@Injectable({providedIn: 'root'})
export class EmployerService {
  employers: Employer[] = [
    {name: 'Alten', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://media.infojobs.net/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/15/15adf63a-5768-4126-8108-1aea669f7505?rule=default', offers: 23},
    {name: 'Grupo CTC', description: 'Servicios de Outsourcing que crean valor', logo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/16/1618f7cb-a005-4f82-b164-27e3cec3635c?rule=default&rule=smallDevice95', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/b3/b3b99b3f-c73e-4aa3-96f9-a004d5bee422?rule=default', offers: 17},
    {name: 'Inditex', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://media.infojobs.net/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/a6/a6850fcf-2f38-405a-91c2-1818f3bbfd0a?rule=default', offers: 23},
    {name: 'Securitas Direct', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/81/8125f3ba-bf2e-4d2c-b0f0-35d0438ac5e1?rule=largeDevice155&rule=smallDevice95/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/5b/5b26e5a9-04ee-4dad-9502-c6cc5b351acc?rule=default', offers: 23},
    {name: 'Pepe jeans', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/15/1595ca5d-33fb-4b05-a6ba-e3e7a37a0890?rule=largeDevice155&rule=smallDevice95', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/8d/8d2f8f06-5f52-4927-8cf4-9f87d1c5531b?rule=default', offers: 23},
    {name: 'Quironsalud', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/5b/5b3d6349-a331-4aef-9866-708fa1f32669?rule=default&rule=smallDevice95/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/1f/1f5f533e-18b3-4c42-bd21-11611bdf9776?rule=default', offers: 23}
  ];

  getEmployers(): Employer[] {
    return [... this.employers];
  }
}


