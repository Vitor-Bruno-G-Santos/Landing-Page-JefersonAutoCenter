"use client";
import React from "react";
import WhatsAppModalOrganism from "../organisms/WhatsAppModalOrganism";

/**
 * Componente de botão flutuante que abre o modal de seleção de WhatsApp.
 * Props:
 *   units – array de unidades (necessário `name` e `whatsapp`).
 */
export default function FloatingWhatsAppButton({ units = [] }) {
  return <WhatsAppModalOrganism units={units} variant="floating" />;
}
