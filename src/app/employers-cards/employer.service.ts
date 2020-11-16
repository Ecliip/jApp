import {Injectable} from '@angular/core';
import {Employer} from './Employer.interface';

@Injectable({providedIn: 'root'})
export class EmployerService {
  employers: Employer[] = [
    {name: 'Alten', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://media.infojobs.net/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/15/15adf63a-5768-4126-8108-1aea669f7505?rule=default', offers: 23},
    {name: 'Alten', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://media.infojobs.net/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/15/15adf63a-5768-4126-8108-1aea669f7505?rule=default', offers: 23},
    {name: 'Alten', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://media.infojobs.net/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/15/15adf63a-5768-4126-8108-1aea669f7505?rule=default', offers: 23},
    {name: 'Alten', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://media.infojobs.net/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/15/15adf63a-5768-4126-8108-1aea669f7505?rule=default', offers: 23},
    {name: 'Alten', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://media.infojobs.net/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/15/15adf63a-5768-4126-8108-1aea669f7505?rule=default', offers: 23},
    {name: 'Alten', description: 'Multinacional especializada en proporcionar servicios de consultoría, tecnología e Ingeniería.', logo: 'https://media.infojobs.net/corp/alten2_logo.png', photo: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/15/15adf63a-5768-4126-8108-1aea669f7505?rule=default', offers: 23}
  ];

  getEmployers(): Employer[] {
    return [... this.employers];
  }
}


