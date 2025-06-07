import { setCookie, removeCookie } from '@/utils/cookies';

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData extends LoginData {
    name: string;
}

interface AuthResponse {
    user: {
        id: string;
        name: string;
        email: string;
    };
    message: string;
}

export const login = async (data: LoginData): Promise<AuthResponse> => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        cache: 'no-store',
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
    }

    const result = await response.json();

    // Set auth cookie
    setCookie('auth_token', result.user.id);
    
    return result;
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        cache: 'no-store',
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Registration failed');
    }

    const result = await response.json();

    // Set auth cookie
    setCookie('auth_token', result.user.id);
    
    return result;
};

export const logout = () => {
    removeCookie('auth_token');
}; 