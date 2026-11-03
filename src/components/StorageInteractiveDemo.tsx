import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UploadCloud, 
  FileText, 
  FileArchive, 
  Database, 
  Lock, 
  Search, 
  LayoutGrid, 
  List, 
  HardDrive, 
  Download, 
  Trash2, 
  MoreVertical,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  size: string;
  type: 'document' | 'archive' | 'data';
  updatedAt: string;
  encrypted: boolean;
}

const initialFiles: FileItem[] = [
  { id: '1', name: 'q4_system_architecture.pdf', size: '2.4 MB', type: 'document', updatedAt: '2 hrs ago', encrypted: true },
  { id: '2', name: 'fernet_key_derivation_specs.docx', size: '840 KB', type: 'document', updatedAt: 'Yesterday', encrypted: true },
  { id: '3', name: 'capstone_benchmarks.csv', size: '1.2 MB', type: 'data', updatedAt: 'Oct 28', encrypted: true },
  { id: '4', name: 'database_schema_v2.sql', size: '420 KB', type: 'data', updatedAt: 'Oct 24', encrypted: true },
  { id: '5', name: 'backup_archive_2026.tar.gz', size: '14.8 MB', type: 'archive', updatedAt: 'Oct 15', encrypted: true },
];

export const StorageInteractiveDemo: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>(initialFiles);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadPhase, setUploadPhase] = useState<string>('');

  const filteredFiles = files.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSimulateUpload = () => {
    if (uploadProgress !== null) return;
    
    setUploadProgress(0);
    setUploadPhase('Deriving Session Key (Fernet)...');

    const steps = [
      { progress: 25, phase: 'Deriving Session Key (Fernet)...' },
      { progress: 55, phase: 'Encrypting payload in memory...' },
      { progress: 85, phase: 'Streaming chunked binary to FastAPI...' },
      { progress: 100, phase: 'Encrypted & indexed in SQLite!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setUploadProgress(steps[currentStep].progress);
        setUploadPhase(steps[currentStep].phase);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          const newFile: FileItem = {
            id: Date.now().toString(),
            name: `encrypted_payload_${new Date().getMinutes()}m.bin`,
            size: '512 KB',
            type: 'data',
            updatedAt: 'Just now',
            encrypted: true,
          };
          setFiles(prev => [newFile, ...prev]);
          setUploadProgress(null);
          setUploadPhase('');
        }, 800);
      }
    }, 500);
  };

  return (
    <div className="w-full bg-[#101B30] border border-[#1B2A47] rounded-xl shadow-card overflow-hidden text-[#F5F8FF] font-sans">
      
      {/* Top Application Bar */}
      <div className="bg-[#0D1424] border-b border-[#1B2A47] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        
        {/* Breadcrumb & Encryption Pill */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#A5B4CC]">
            <HardDrive className="w-4 h-4 text-[#4DB8FF]" />
            <span className="font-semibold text-[#F5F8FF]">Vault</span>
            <span>/</span>
            <span>Secure_Documents</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#168BFF]/15 text-[#4DB8FF] text-[11px] font-medium border border-[#168BFF]/30">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4DB8FF]" />
            <span>Fernet-128 Encryption Active</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateUpload}
            disabled={uploadProgress !== null}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] text-xs font-semibold transition-all shadow-[0_0_12px_rgba(22,139,255,0.3)] disabled:opacity-50"
          >
            {uploadProgress !== null ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Encrypting...</span>
              </>
            ) : (
              <>
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Simulate Upload</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Storage Quota Bar */}
      <div className="px-4 py-2.5 bg-[#070B14]/60 border-b border-[#1B2A47] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="font-medium text-[#A5B4CC]">Storage Usage:</span>
          <div className="w-40 sm:w-56 h-1.5 rounded-full bg-[#1B2A47] overflow-hidden flex">
            <div className="w-[35%] bg-[#168BFF]" title="Encrypted Docs" />
            <div className="w-[20%] bg-[#4DB8FF]" title="Archives" />
            <div className="w-[10%] bg-[#6E82A1]" title="Databases" />
          </div>
          <span className="text-[11px] text-[#A5B4CC] font-mono">4.8 GB of 15 GB</span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-[#6E82A1]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#168BFF]" /> Documents
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4DB8FF]" /> Archives
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#6E82A1]" /> Data
          </span>
        </div>
      </div>

      {/* Upload Progress Notification if active */}
      {uploadProgress !== null && (
        <div className="px-4 py-2.5 bg-[#168BFF]/10 border-b border-[#168BFF]/30 text-xs">
          <div className="flex items-center justify-between mb-1 text-[#4DB8FF] font-medium">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#168BFF]" />
              <span>{uploadPhase}</span>
            </span>
            <span className="font-mono text-[#F5F8FF]">{uploadProgress}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#1B2A47] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#168BFF] to-[#4DB8FF] transition-all duration-300 rounded-full" 
              style={{ width: `${uploadProgress}%` }} 
            />
          </div>
        </div>
      )}

      {/* Filter and View Toggle Toolbar */}
      <div className="p-3.5 flex items-center justify-between gap-3 border-b border-[#1B2A47]">
        <div className="relative flex-1 max-w-xs">
          <Search className="w-3.5 h-3.5 text-[#6E82A1] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search encrypted files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-[#0D1424] border border-[#1B2A47] text-[#F5F8FF] focus:border-[#168BFF] focus:outline-none transition-colors"
          />
        </div>

        <div className="flex items-center gap-1 bg-[#0D1424] p-0.5 rounded-lg border border-[#1B2A47]">
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-[#168BFF] text-[#F5F8FF] shadow-sm' : 'text-[#6E82A1] hover:text-[#F5F8FF]'}`}
            title="List view"
            aria-label="List view"
          >
            <List className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-[#168BFF] text-[#F5F8FF] shadow-sm' : 'text-[#6E82A1] hover:text-[#F5F8FF]'}`}
            title="Grid view"
            aria-label="Grid view"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Files Display */}
      <div className="p-4">
        {filteredFiles.length === 0 ? (
          <div className="text-center py-8 text-[#6E82A1] text-xs">
            No files match your search query.
          </div>
        ) : viewMode === 'list' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#1B2A47] text-[#6E82A1] uppercase font-mono text-[10px]">
                  <th className="pb-2 w-8">
                    <input 
                      type="checkbox"
                      checked={selectedIds.length === filteredFiles.length && filteredFiles.length > 0}
                      onChange={() => {
                        if (selectedIds.length === filteredFiles.length) {
                          setSelectedIds([]);
                        } else {
                          setSelectedIds(filteredFiles.map(f => f.id));
                        }
                      }}
                      className="rounded bg-[#0D1424] border-[#1B2A47] text-[#168BFF] focus:ring-[#168BFF]"
                    />
                  </th>
                  <th className="pb-2 font-medium">Name</th>
                  <th className="pb-2 font-medium hidden sm:table-cell">Size</th>
                  <th className="pb-2 font-medium hidden md:table-cell">Modified</th>
                  <th className="pb-2 font-medium">Status</th>
                  <th className="pb-2 text-right">Options</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1B2A47]/40">
                {filteredFiles.map((file) => {
                  const isSelected = selectedIds.includes(file.id);
                  return (
                    <tr 
                      key={file.id} 
                      className={`group hover:bg-[#13223D]/50 transition-colors ${isSelected ? 'bg-[#168BFF]/10' : ''}`}
                    >
                      <td className="py-2.5">
                        <input 
                          type="checkbox" 
                          checked={isSelected}
                          onChange={() => toggleSelect(file.id)}
                          className="rounded bg-[#0D1424] border-[#1B2A47] text-[#168BFF] focus:ring-[#168BFF]"
                        />
                      </td>
                      <td className="py-2.5">
                        <div className="flex items-center gap-2">
                          {file.type === 'document' && <FileText className="w-4 h-4 text-[#4DB8FF] shrink-0" />}
                          {file.type === 'archive' && <FileArchive className="w-4 h-4 text-[#168BFF] shrink-0" />}
                          {file.type === 'data' && <Database className="w-4 h-4 text-[#6E82A1] shrink-0" />}
                          <span className="font-medium text-[#F5F8FF] group-hover:text-[#4DB8FF] transition-colors">
                            {file.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-2.5 text-[#A5B4CC] font-mono hidden sm:table-cell">{file.size}</td>
                      <td className="py-2.5 text-[#6E82A1] hidden md:table-cell">{file.updatedAt}</td>
                      <td className="py-2.5">
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#4DB8FF] font-medium bg-[#168BFF]/10 px-2 py-0.5 rounded border border-[#168BFF]/20">
                          <CheckCircle2 className="w-3 h-3 text-[#168BFF]" />
                          <span>Fernet Encrypted</span>
                        </span>
                      </td>
                      <td className="py-2.5 text-right">
                        <button 
                          className="p-1 hover:bg-[#13223D] rounded text-[#6E82A1] hover:text-[#F5F8FF]"
                          title="File options"
                          aria-label="File options"
                        >
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredFiles.map((file) => {
              const isSelected = selectedIds.includes(file.id);
              return (
                <div
                  key={file.id}
                  onClick={() => toggleSelect(file.id)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#168BFF] bg-[#168BFF]/15 shadow-sm'
                      : 'border-[#1B2A47] bg-[#0D1424] hover:border-[#168BFF]/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2 rounded-md bg-[#101B30] text-[#4DB8FF] border border-[#1B2A47]">
                      {file.type === 'document' && <FileText className="w-5 h-5" />}
                      {file.type === 'archive' && <FileArchive className="w-5 h-5" />}
                      {file.type === 'data' && <Database className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] font-mono text-[#4DB8FF] bg-[#168BFF]/15 px-1.5 py-0.5 rounded border border-[#168BFF]/20">
                      AES-Fernet
                    </span>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-[#F5F8FF] truncate" title={file.name}>
                      {file.name}
                    </h5>
                    <div className="flex items-center justify-between text-[11px] text-[#A5B4CC] font-mono mt-1">
                      <span>{file.size}</span>
                      <span>{file.updatedAt}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Floating Action Bar when files are selected */}
      {selectedIds.length > 0 && (
        <div className="px-4 py-2.5 bg-[#0D1424] border-t border-[#168BFF]/40 text-[#F5F8FF] flex items-center justify-between gap-3 text-xs animate-in slide-in-from-bottom duration-200">
          <span className="font-medium text-[#4DB8FF]">
            {selectedIds.length} file{selectedIds.length > 1 ? 's' : ''} selected
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert(`Simulating decrypted download of ${selectedIds.length} files.`)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] font-semibold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Decrypted</span>
            </button>
            <button 
              onClick={() => {
                setFiles(prev => prev.filter(f => !selectedIds.includes(f.id)));
                setSelectedIds([]);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#101B30] hover:bg-red-950/60 border border-red-900/40 text-red-300 font-medium transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}

      {/* Engineering note footer */}
      <div className="bg-[#070B14] border-t border-[#1B2A47] px-4 py-2 text-[11px] text-[#6E82A1] flex items-center justify-between">
        <span className="font-mono">React 18 · FastAPI REST · Fernet Key Engine</span>
        <span className="text-[#4DB8FF] font-medium">Interactive Preview</span>
      </div>

    </div>
  );
};
