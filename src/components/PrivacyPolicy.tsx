import { Button } from './ui/button';

export function PrivacyPolicy() {
    const handleBackClick = () => {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: '#edf1fc' }}>
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl text-black" style={{ color: '#ED0F35' }}>Privacy Policy</h1>
                    <Button
                        variant="ghost"
                        onClick={handleBackClick}
                        className="text-black hover:bg-gray-100"
                    >
                        ← Back
                    </Button>
                </div>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl mb-4" style={{ color: '#ED0F35' }}>Information We Collect</h2>
                        <p className="text-gray-700">
                            We collect information you provide directly to us, such as when you create an account,
                            subscribe to our newsletter, or contact us for support. This may include your name,
                            email address, and any other information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl mb-4" style={{ color: '#ED0F35' }}>How We Use Your Information</h2>
                        <p className="text-gray-700">
                            We use the information we collect to provide, maintain, and improve our services,
                            communicate with you, and comply with legal obligations. We may also use your
                            information to send you updates about our products and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl mb-4" style={{ color: '#ED0F35' }}>Information Sharing</h2>
                        <p className="text-gray-700">
                            We do not sell, trade, or otherwise transfer your personal information to third parties
                            without your consent, except as described in this privacy policy or as required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl mb-4" style={{ color: '#ED0F35' }}>Data Security</h2>
                        <p className="text-gray-700">
                            We implement appropriate security measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction. However, no method of
                            transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl mb-4" style={{ color: '#ED0F35' }}>Contact Us</h2>
                        <p className="text-gray-700">
                            If you have any questions about this Privacy Policy, please contact us at our
                            official email address.
                        </p>
                    </section>

                    <section>
                        <p className="text-gray-500 text-sm">
                            Last updated: August 23, 2025
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}