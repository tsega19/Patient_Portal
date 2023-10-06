package com.pluralsight.patientportal.domain;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A Appointment.
 */
@Entity
@Table(name = "appointment")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Appointment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "reason")
    private String reason;

    @Column(name = "insurance_change")
    private Boolean insuranceChange;

    @NotNull
    @Pattern(regexp = "^\\d{3}-\\d{3}-\\d{4}$")
    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Appointment id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReason() {
        return this.reason;
    }

    public Appointment reason(String reason) {
        this.setReason(reason);
        return this;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Boolean getInsuranceChange() {
        return this.insuranceChange;
    }

    public Appointment insuranceChange(Boolean insuranceChange) {
        this.setInsuranceChange(insuranceChange);
        return this;
    }

    public void setInsuranceChange(Boolean insuranceChange) {
        this.insuranceChange = insuranceChange;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public Appointment phoneNumber(String phoneNumber) {
        this.setPhoneNumber(phoneNumber);
        return this;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Appointment)) {
            return false;
        }
        return id != null && id.equals(((Appointment) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Appointment{" +
            "id=" + getId() +
            ", reason='" + getReason() + "'" +
            ", insuranceChange='" + getInsuranceChange() + "'" +
            ", phoneNumber='" + getPhoneNumber() + "'" +
            "}";
    }
}
