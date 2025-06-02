import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="AI Prompt Standards Institute"
      description="The official home of APSI – defining open standards for AI prompt structure, registration, and licensing.">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to APSI</h1>
        <p>The AI Prompt Standards Institute</p>
        <p>We define FML, APRP, and prompt licensing standards for the AI-native economy.</p>
        <a href="/docs/fml" style={{ marginTop: '2rem', display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '6px', textDecoration: 'none' }}>
          View the FML Spec
        </a>
      </main>
    </Layout>
  );
}
