import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IAppointment, NewAppointment } from '../appointment.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IAppointment for edit and NewAppointmentFormGroupInput for create.
 */
type AppointmentFormGroupInput = IAppointment | PartialWithRequiredKeyOf<NewAppointment>;

type AppointmentFormDefaults = Pick<NewAppointment, 'id' | 'insuranceChange'>;

type AppointmentFormGroupContent = {
  id: FormControl<IAppointment['id'] | NewAppointment['id']>;
  reason: FormControl<IAppointment['reason']>;
  insuranceChange: FormControl<IAppointment['insuranceChange']>;
  phoneNumber: FormControl<IAppointment['phoneNumber']>;
};

export type AppointmentFormGroup = FormGroup<AppointmentFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class AppointmentFormService {
  createAppointmentFormGroup(appointment: AppointmentFormGroupInput = { id: null }): AppointmentFormGroup {
    const appointmentRawValue = {
      ...this.getFormDefaults(),
      ...appointment,
    };
    return new FormGroup<AppointmentFormGroupContent>({
      id: new FormControl(
        { value: appointmentRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      reason: new FormControl(appointmentRawValue.reason),
      insuranceChange: new FormControl(appointmentRawValue.insuranceChange),
      phoneNumber: new FormControl(appointmentRawValue.phoneNumber, {
        validators: [Validators.required, Validators.pattern('^\\d{3}-\\d{3}-\\d{4}$')],
      }),
    });
  }

  getAppointment(form: AppointmentFormGroup): IAppointment | NewAppointment {
    return form.getRawValue() as IAppointment | NewAppointment;
  }

  resetForm(form: AppointmentFormGroup, appointment: AppointmentFormGroupInput): void {
    const appointmentRawValue = { ...this.getFormDefaults(), ...appointment };
    form.reset(
      {
        ...appointmentRawValue,
        id: { value: appointmentRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): AppointmentFormDefaults {
    return {
      id: null,
      insuranceChange: false,
    };
  }
}
