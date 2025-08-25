export interface RegisterProps {
  username: string;
  password: string;
  email: string;
}

export interface LoginProps {
  username: string;
  password: string;
}

export interface User {
  email: string;
  role: string;
  username: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    type: string;
    username: string;
    email: string;
    role: string;
  };
}
