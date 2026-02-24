import { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/useAuth";

interface FormErrors {
  fullName?: string;
  password?: string;
}

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const trimmedName = fullName.trim();

    if (!trimmedName) {
      newErrors.fullName = "Full name is required";
    } else if (trimmedName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;

    login({
      fullName: fullName.trim(),
      password,
    });

    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Paper className="p-8! w-full! max-w-md!">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <form
          className="mt-6! space-y-4!"
          onChange={() => {
            if (Object.keys(errors).length > 0) validate();
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <TextField
            fullWidth
            label="Full Name"
            value={fullName}
            error={!!errors.fullName}
            helperText={errors.fullName || " "}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={validate}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            autoComplete="off"
            value={password}
            error={!!errors.password}
            helperText={errors.password || " "}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validate}
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}