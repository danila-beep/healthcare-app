import { cn } from "@/shared/lib/utils/styles/cn";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useUserInfoStore } from "@/shared/lib/hooks/useUserInfoStore";
export const UserDropdown = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const { userInfo } = useUserInfoStore();

    if (!isOpen) return null;

    return (
        <div className={cn(
            "absolute top-full right-0 mt-2",
            "min-w-100 bg-white rounded-2xl shadow-lg",
            "border border-gray-100",
            "z-50"
        )}>
            <div className="p-4 border-b border-gray-100">
                <h2 className="font-mulish text-xl font-bold">User Information</h2>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 justify-between w-full">
                        <p className="font-mulish text-sm font-bold">Name</p>
                        <p className="font-mulish text-md font-medium">{userInfo.name}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 justify-between w-full">
                    <p className="font-mulish text-sm font-bold">Age</p>
                    <p className="font-mulish text-md font-medium">{userInfo.age}</p>
                </div>
                <div className="flex items-center gap-2 justify-between w-full">
                    <p className="font-mulish text-sm font-bold">Gender</p>
                    <p className="font-mulish text-md font-medium">{userInfo.gender}</p>
                </div>
            </div>
        </div>
    );
};


