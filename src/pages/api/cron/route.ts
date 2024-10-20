import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const authHeader = request.headers['authorization'];
  if (
    !process.env.CRON_SECRET ||
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return response.status(401).json({ success: false });
  }

  try {
    // Trigger the deploy hook
    const deployHookUrl = 'https://api.vercel.com/v1/integrations/deploy/prj_mq1ZF54euDWiCw3IOl3c4iodWI2d/FIJzlsPGdY';
    const deployResponse = await fetch(deployHookUrl, { method: 'POST' });
    
    if (deployResponse.ok) {
      const deployResult = await deployResponse.json();
      console.log('Deployment triggered:', deployResult);
      response.status(200).json({ success: true, deployment: deployResult });
    } else {
      console.error('Failed to trigger deployment:', await deployResponse.text());
      response.status(500).json({ success: false, error: 'Failed to trigger deployment' });
    }
  } catch (error) {
    console.error('Error triggering deployment:', error);
    response.status(500).json({ success: false, error: 'Internal server error' });
  }
}
