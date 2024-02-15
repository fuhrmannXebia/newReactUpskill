export type ContactInfoType = 'sender' | 'receiver';

export interface ContactInfoProps {
    type: ContactInfoType;
  }

  interface ValidationRule {
    required?: string;
    pattern?: {
      value: RegExp; 
      message: string;
    };
  }
  
  export interface FieldConfig {
    label: string;
    id: string;
    variant: 'standard' | 'filled' | 'outlined'; 
    InputLabelProps: {
      shrink: boolean;
    };
    validation?: ValidationRule; 
  }