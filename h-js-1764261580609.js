/*
 * Title: h.js
 * Language: javascript
 * Description: No description
 * Created: 2025-11-27T16:39:40.609Z
 * Author: SATHIYAMURTHY-GIT
 */

.app {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.three-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;
}

/* Header Styles */
.header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
}

[data-theme="dark"] .header {
  background: rgba(15, 15, 15, 0.9);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  background: none;
  -webkit-text-fill-color: var(--text-primary);
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.welcome-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Dashboard Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.dashboard-title h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.dashboard-title p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: 0;
}

/* Divider */
.divider {
  height: 1px;
  background: var(--border-color);
  margin: 2rem 0;
  opacity: 0.6;
}

/* Login Styles */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

.login-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 3rem;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.login-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.login-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0;
}

/* Login Options */
.login-options {
  margin-bottom: 2.5rem;
}

.login-options h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.login-option {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
  background: var(--bg-primary);
}

.login-option:hover {
  border-color: var(--primary-color);
  transform: translateY(-1px);
}

.login-option.debug {
  background: rgba(139, 92, 246, 0.05);
  border-color: rgba(139, 92, 246, 0.3);
}

.option-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.option-icon {
  font-size: 1.25rem;
  margin-top: 0.125rem;
}

.option-info {
  flex: 1;
}

.option-info strong {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.option-info span {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

/* Login Actions */
.login-actions {
  margin-bottom: 2rem;
}

.github-login-btn {
  width: 100%;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.divider-text {
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
}

.divider-text::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border-color);
}

.divider-text span {
  background: var(--bg-secondary);
  padding: 0 1rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
}

.demo-btn {
  width: 100%;
  font-weight: 600;
}

/* Login Footer */
.login-footer {
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.login-footer p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.login-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.login-footer li {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  padding-left: 1rem;
  position: relative;
}

.login-footer li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--text-secondary);
}

/* Loading styles */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-color);
  border-left: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Enhanced Snippet Card Styles */
.snippets-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.snippet-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.snippet-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.snippet-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.snippet-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.snippet-meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.language-tag, .repo-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.language-tag {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.repo-tag {
  background: rgba(107, 114, 128, 0.1);
  color: var(--text-secondary);
  border: 1px solid rgba(107, 114, 128, 0.2);
  font-family: 'Monaco', 'Menlo', monospace;
}

.snippet-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.snippet-code-preview {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.4;
  max-height: 150px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.snippet-code-preview.expanded {
  max-height: none;
  overflow-y: auto;
}

.snippet-code-preview::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(transparent, var(--bg-primary));
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.snippet-code-preview.expanded::after {
  opacity: 0;
}

.snippet-code-preview pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.snippet-code-preview code {
  color: var(--text-primary);
  font-family: inherit;
}

.expand-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(transparent, var(--bg-primary));
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.5rem;
  cursor: pointer;
  z-index: 2;
}

.expand-overlay span {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.expand-overlay:hover span {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

/* Enhanced Snippet Actions */
.snippet-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.delete-btn {
  color: var(--error-color) !important;
}

.delete-btn:hover {
  background: rgba(239, 68, 68, 0.1) !important;
}

/* Better responsive layout for snippet footer */
.snippet-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.snippet-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  flex: 1;
}

.snippet-path {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.8rem;
}

.snippet-date {
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Loading state for snippet content */
.snippet-loading {
  color: var(--text-secondary);
  font-style: italic;
}

/* Enhanced empty state */
.snippets-empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 2px dashed var(--border-color);
}

.empty-state-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.5;
}

.snippets-empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
}

.snippets-empty-state p {
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: var(--bg-secondary);
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border-color);
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--bg-primary);
  color: var(--text-primary);
}

/* Snippet Form Modal */
.snippet-form-modal {
  padding: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}

.form-group textarea#code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.8rem;
  line-height: 1.5;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

/* Improved responsive design */
@media (max-width: 768px) {
  .header-content {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .dashboard-header {
    flex-direction: column;
    gap: 1rem;
  }

  .main-content {
    padding: 1rem;
  }

  .login-card {
    padding: 2rem;
    margin: 1rem;
  }

  .login-header h1 {
    font-size: 1.75rem;
  }

  .snippet-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .snippet-actions {
    width: 100%;
    justify-content: flex-end;
  }
  
  .snippet-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .snippet-meta {
    width: 100%;
    justify-content: flex-start;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    margin: 1rem;
  }
  
  .modal-header,
  .snippet-form-modal {
    padding: 1.25rem;
  }
  
  .form-actions {
    flex-direction: column-reverse;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 1.5rem;
  }
  
  .login-header h1 {
    font-size: 1.5rem;
  }

  .snippet-card {
    padding: 1.25rem;
  }
  
  .snippet-title {
    font-size: 1.1rem;
  }
  
  .snippet-code-preview {
    max-height: 120px;
  }
}