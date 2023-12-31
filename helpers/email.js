import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Informacion del Email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en Uptask",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en Uptask</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        <p>Si tu no creates esta cuenta, puedes ignorar el mensaje</p>
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Informacion del Email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Restablece tu Contraseña",
    text: "Restablece tu Contraseña",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu contraseña</p>
        <p>Sigue el siguente enlace para generar una nueva contraseña:</p>
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a>
        <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    `,
  });
};
