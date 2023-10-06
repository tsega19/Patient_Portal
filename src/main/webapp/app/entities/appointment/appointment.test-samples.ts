import { IAppointment, NewAppointment } from './appointment.model';

export const sampleWithRequiredData: IAppointment = {
  id: 64262,
  phoneNumber: '388-219-9712',
};

export const sampleWithPartialData: IAppointment = {
  id: 5716,
  phoneNumber: '836-635-0915',
};

export const sampleWithFullData: IAppointment = {
  id: 63582,
  reason: 'analyzing fuchsia',
  insuranceChange: false,
  phoneNumber: '150-053-8689',
};

export const sampleWithNewData: NewAppointment = {
  phoneNumber: '276-215-4554',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
