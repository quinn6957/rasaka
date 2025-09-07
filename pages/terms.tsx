import { Button } from '../components/ui/button';

export default function TermsOfUse() {
  {/* does not properly refresh the page, but at least changes the URL, fix this. */ }
  const handleBackClick = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.location.reload(); // Force a full page reload to ensure the content updates
  }

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0b090b' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl text-black" style={{ color: '#D21F3C' }}>Terms of Use</h1>
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="text-white hover:bg-gray-100"
          >
            ← Back
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using our Microsoft 365 tenant services and custom websites, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all users, including but not limited to employees, contractors, and authorized third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Services Description</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2" style={{ color: '#D21F3C' }}>Microsoft 365 Tenant Services</h3>
                <p className="text-gray-700">
                  Our Microsoft 365 tenant provides access to cloud-based productivity and collaboration tools including but not limited to Exchange Online, SharePoint Online, Teams, OneDrive for Business, and other Microsoft 365 applications. These services are provided subject to Microsoft's Terms of Service and our internal policies.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2" style={{ color: '#D21F3C' }}>Custom Websites and Applications</h3>
                <p className="text-gray-700">
                  Our custom websites and web applications provide various business services and may collect, process, and store data that you provide or that is generated through your use of these services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>User Responsibilities</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
              <p><strong>Appropriate Use:</strong> You agree to use our services only for lawful purposes and in accordance with our acceptable use policies.</p>
              <p><strong>Data Accuracy:</strong> You are responsible for ensuring that any data you provide is accurate, current, and complete.</p>
              <p><strong>Compliance:</strong> You must comply with all applicable laws, regulations, and organizational policies when using our services.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Data Usage and Access</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2" style={{ color: '#D21F3C' }}>Microsoft 365 Data</h3>
                <p className="text-gray-700">
                  Data stored within our Microsoft 365 tenant is subject to Microsoft's data processing terms and our organizational data governance policies. We maintain administrative control over this environment and may access data as necessary for security, compliance, and operational purposes.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2" style={{ color: '#D21F3C' }}>Custom Website Data</h3>
                <p className="text-gray-700">
                  Data you provide through our custom websites may be stored, processed, and used to provide our services. We implement appropriate security measures to protect this data and will only use it in accordance with our Privacy Policy and applicable laws.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Prohibited Activities</h2>
            <div className="text-gray-700 space-y-2">
              <p>You agree not to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Interfere with the security or integrity of our services</li>
                <li>Use our services for commercial purposes without authorization</li>
                <li>Share access credentials with unauthorized individuals</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Intellectual Property</h2>
            <p className="text-gray-700">
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Service Availability</h2>
            <p className="text-gray-700">
              While we strive to maintain high availability of our services, we do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or unforeseen circumstances. We reserve the right to modify, suspend, or discontinue services with appropriate notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the preceding twelve months.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend your access to our services at any time for violations of these terms or for any other reason at our sole discretion. Upon termination, your right to use the services will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-4" style={{ color: '#D21F3C' }}>Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Use, please contact us through our official communication channels.
            </p>
          </section>

          <section>
            <p className="text-gray-500 text-sm">
              Last updated: August 24, 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}